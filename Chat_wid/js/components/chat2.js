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
    setTimeout(() => {
        if (response.length < 1) {
            // Si no hay respuesta de Rasa
            const fallbackMsg = "Lo siento amiga, estoy teniendo problemas, intentalo más tarde!!";

            const BotResponse = `<div class="botBox"><p class="botMsg">${fallbackMsg}</p></div><div class="clearfix"></div>`;

            $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
            scrollToBottomOfResults();
        } else {
            // Si tenemos respuesta
            for (let i = 0; i < response.length; i += 1) {
                // check if the response contains "text"
                if (Object.hasOwnProperty.call(response[i], "text")) {
                    if (response[i].text != null) {
                        // Convertimos el texto a markdown usando: showdown.js(https://github.com/showdownjs/showdown);
                        let botResponse;
                        let html = converter.makeHtml(response[i].text);
                        html = html.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<strong>", "<b>").replaceAll("</strong>", "</b>");
                        html = html.replace(/(?:\r\n|\r|\n)/g, '<br>')
                        console.log(html);

                        if (html.includes("<blockquote>")) {
                            html = html.replaceAll("<br>", "");
                            botResponse = getBotResponse(html);
                        }
                        else {
                            if (!botResponse) {
                                botResponse = `<div class="botBox"><p class="botMsg">${response[i].text}</p></div><div class="clearfix"></div>`;
                            }
                        }
                        $(botResponse).appendTo(".chats").hide().fadeIn(1000);
                    }
                }

                // Miramos si la respuesta contiene botones
                if (Object.hasOwnProperty.call(response[i], "buttons")) {
                    if (response[i].buttons.length > 0) {
                        addSuggestion(response[i].buttons);
                    }
                }

                // Miramos si la respuesta contiene acciones personalizadas
                if (Object.hasOwnProperty.call(response[i], "custom")) {
                    const { payload } = response[i].custom;
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

            // si el usuario quiere empezar de nuevo la conversación
            if (message.toLowerCase() === "/restart") {
                $("#userInput").prop("disabled", false);
                return;
            }
            setBotResponse(botResponse);
        },
        error(xhr, textStatus) {
            if (message.toLowerCase() === "/restart") {
                $("#userInput").prop("disabled", false);
            }

            // si no hay respuesta de rasa
            setBotResponse("");
            console.log("Error: ", textStatus);
        },
    });
}

// Si el usuario presiona el botón de enviar
$("#sendButton").on("click", (e) => {
    const text = $(".usrInput").val();
    $(".suggestions").remove();
    $(".usrInput").blur();
    setUserResponse(text);
    send(text);
    return false;
});

// Si el usuario presiona enter
$(".usrInput").on("keyup keypress", (e) => {
    const keyCode = e.keyCode || e.which;

    const text = $(".usrInput").val();
    if (keyCode === 13) {
        if (text === "" || $.trim(text) === "") {
            e.preventDefault();
            return false;
        }
        $(".suggestions").remove();
        $(".usrInput").blur();
        setUserResponse(text);
        send(text);
        return false;
    }
    return true;
});

function restartConversation() {
    $("#userInput").prop("disabled", true);
    $(".chats").html("");
    $(".usrInput").val("");
    send("/restart");
}

$("#restartButton").on("click", (e) => {
    restartConversation();
    return false;
});
