export function highlightTab(tab) {
    $(".open").removeClass("gray");
    $(".open").addClass("dark-gray");
    $(tab).removeClass("dark-gray")
    $(tab).addClass("gray")
}

export function openFilter() {
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".filter-container").removeClass("d-none");
    $(".results").removeClass("d-none");
    $(".custom-deck-container").addClass("d-none");
    $(".card-container").css({'width':'100%','margin':'0 auto'});
    $(".custom-deck-thing").css({'display':'none'});
    $(".double-card-container").css({'display':'block'});
}

export function openName() {
    $(".filter-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".auto-fill-parent-container").removeClass("d-none");
    $(".results").addClass("d-none");
    $(".custom-deck-container").addClass("d-none");
    $(".card-container").css({'width':'100%','margin':'0 auto'});
    $(".custom-deck-thing").css({'display':'none'});
    $(".double-card-container").css({'display':'block'});
}

export function openHand() {
    $(".filter-container").addClass("d-none");
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").removeClass("d-none");
    $(".results").addClass("d-none");
    $(".custom-deck-container").addClass("d-none");
    $(".card-container").css({'width':'100%','margin':'0 auto'});
    $(".custom-deck-thing").css({'display':'none'});
    $(".double-card-container").css({'display':'block'});
}

export function openCustomDeck() {
    $(".filter-container").addClass("d-none");
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".custom-deck-container").removeClass("d-none");
    $(".results").addClass("d-none");
    $(".card-container").css({'width':'50%','margin':'0'});
    $(".custom-deck-thing").css({'display':'block'});
    $(".double-card-container").css({'display':'flex'});
}