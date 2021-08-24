const converter = new showdown.Converter();

function scrollToBottomOfResults() {
    const terminalResultsDiv = document.getElementById("chats");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

function setUserResponse(message){
    const user_response =`<p class="userMsg">${message} </p><div class="clearfix"></div>`;
    $(user_response).appendTo(".chats").show("slow");
    
    $(".usrInput").val("");
    $(".suggestions").remove();
    scrollToBottomOfResults();
}


function getBotResponse(text) {
    botResponse = `<div class="botBox"><span class="botMsg">${text}</span></div><div class="clearfix"></div>`;
    return botResponse;
}

//Respuesta del bot
function setBotResponse(response) {
    // renders bot response after 500 milliseconds
    setTimeout(() => {
        if (response.length < 1) {
            // if there is no response from Rasa, send  fallback message to the user
            const fallbackMsg = "Lo siento amiga, estoy teniendo problemas, intentalo más tarde!!";

            const BotResponse = `<div class="botBox"><p class="botMsg">${fallbackMsg}</p></div><div class="clearfix"></div>`;

            $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
            scrollToBottomOfResults();
        } else {
            // if we get response from Rasa
            for (let i = 0; i < response.length; i += 1) {
                // check if the response contains "text"
                if (Object.hasOwnProperty.call(response[i], "text")) {
                    if (response[i].text != null) {
                        // convert the text to mardown format using showdown.js(https://github.com/showdownjs/showdown);
                        let botResponse;
                        let html = converter.makeHtml(response[i].text);
                        html = html.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<strong>", "<b>").replaceAll("</strong>", "</b>");
                        html = html.replace(/(?:\r\n|\r|\n)/g, '<br>')
                        console.log(html);
                        // check for blockquotes
                        if (html.includes("<blockquote>")) {
                            html = html.replaceAll("<br>", "");
                            botResponse = getBotResponse(html);
                        }
                        else {
                            // if no markdown formatting found, render the text as it is.
                            if (!botResponse) {
                                botResponse = `<div class="botBox"><p class="botMsg">${response[i].text}</p></div><div class="clearfix"></div>`;
                            }
                        }
                        // append the bot response on to the chat screen
                        $(botResponse).appendTo(".chats").hide().fadeIn(1000);
                    }
                }

                // check if the response contains "buttons"
                if (Object.hasOwnProperty.call(response[i], "buttons")) {
                    if (response[i].buttons.length > 0) {
                        addSuggestion(response[i].buttons);
                    }
                }

                // check if the response contains "custom" message
                if (Object.hasOwnProperty.call(response[i], "custom")) {
                    const { payload } = response[i].custom;
                    if (payload === "quickReplies") {
                        // check if the custom payload type is "quickReplies"
                        const quickRepliesData = response[i].custom.data;
                        showQuickReplies(quickRepliesData);
                        return;
                    }
                }
            }
            scrollToBottomOfResults();
        }
        $(".usrInput").focus();
    }, 500);

}

//Enviamos el mensaje del usuario al servidor de rasa
function send(message) {
    $.ajax({
        url: rasa_server_url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ message, sender: sender_id }),
        success(botResponse, status) {
            console.log("Response from Rasa: ", botResponse, "\nStatus: ", status);

            // if user wants to restart the chat and clear the existing chat contents
            if (message.toLowerCase() === "/restart") {
                $("#userInput").prop("disabled", false);
                return;
            }
            setBotResponse(botResponse);
        },
        error(xhr, textStatus) {
            if (message.toLowerCase() === "/restart") {
                $("#userInput").prop("disabled", false);
                // if you want the bot to start the conversation after the restart action.
                // actionTrigger();
                // return;
            }

            // if there is no response from rasa server, set error bot response
            setBotResponse("");
            console.log("Error from bot end: ", textStatus);
        },
    });
}

$("#sendButton").on("click", (e) => {
    const text = $(".usrInput").val();
    $(".suggestions").remove();
    $(".usrInput").blur();
    setUserResponse(text);
    send(text);
    return false;
});
