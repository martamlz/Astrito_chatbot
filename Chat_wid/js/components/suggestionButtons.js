function addSuggestion(suggestions) {
    setTimeout(() => {
        const suggLength = suggestions.length;
        $(
            ' <div class="singleCard"> <div class="suggestions"><div class="menu"></div></div></diV>',
        )
            .appendTo(".chats")
            .hide()
            .fadeIn(1000);
        // Bucle
        for (let i = 0; i < suggLength; i += 1) {
            $(
                `<div class="menuChips" data-payload='${suggestions[i].payload}'>${suggestions[i].title}</div>`,
            ).appendTo(".menu");
        }
        scrollToBottomOfResults();
    }, 1000);
}


// si clickamos en alguno de los botones
$(document).on("click", ".menu .menuChips", function () {
    const text = this.innerText;
    const payload = this.getAttribute("data-payload");
    console.log("payload: ", this.getAttribute("data-payload"));
    setUserResponse(text);
    send(payload);

    // las borramos una vez pulsadas
    $(".suggestions").remove();
});
