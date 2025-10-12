export function highlightTab(tab) {
    $(".nav__tab").removeClass("nav__tab--open");
    $(tab).addClass("nav__tab--open")
}

export function openFilter() {
    $(".action-container").removeClass("action-container--open");
    $(".js_filter-container").addClass("action-container--open");
    $(".js_results").removeClass("results--hidden");
    $(".js_card-container").addClass("card-container--hidden");

    // $(".custom-deck-thing").css({'display':'none'});
}

export function openName() {
    $(".action-container").removeClass("action-container--open");
    $(".js_auto-fill-container").addClass("action-container--open");
    $(".js_results").addClass("results--hidden");
    $(".js_card-container").addClass("card-container--hidden");

    // $(".custom-deck-thing").css({'display':'none'});
}

export function openHand() {
    $(".action-container").removeClass("action-container--open");
    $(".js_deal-hand-container").addClass("action-container--open");
    $(".js_results").addClass("results--hidden");
    $(".js_card-container").addClass("card-container--hidden");

    // $(".custom-deck-thing").css({'display':'none'});
}

export function openAscension() {
    $(".action-container").removeClass("action-container--open");
    $(".js_ascension-container").addClass("action-container--open");
    $(".js_results").addClass("results--hidden");
    $(".js_card-container").addClass("card-container--hidden");
}

export function openCustomDeck() {
    $(".action-container").removeClass("action-container--open");
    $(".js_custom-deck-container").addClass("action-container--open");
    $(".js_custom-deck-card-options").css({'width':'50%','margin':'0'});
    $(".js_card-container").addClass("card-container--hidden");


    $(".js_results").addClass("results--hidden");
    // $(".js_custom-deck-container").removeClass("custom-deck-container--hidden");

    // $(".filter-container").addClass("d-none");
    // $(".auto-fill-parent-container").addClass("d-none");
    // $(".deal-hand-container").addClass("d-none");
    // $(".custom-deck-container").removeClass("d-none");
    
    // $(".custom-deck-thing").css({'display':'block'});
    // $(".double-card-container").css({'display':'flex'});
}