import { scrollToResults } from "./placeCards.js";

export function placeOtherCards() {

    $(".js_card-container").empty();
    $(".js_card-container").removeClass("card-container--hidden");
    $(".js_results").css("opacity", "0");

    if ($(".js_mindbug").is(':checked')) {
        placeMindbugs();
    }
    if ($(".js_alternate").is(':checked')) {
        placeAlternate();
    }

    

    scrollToResults();
}

function placeMindbugs() {
    let numberOfMindbugs = 12;
    let numberOfMindfrogs = 2;

    for (let i = 1; i < numberOfMindbugs + 1; i++) {
        $(".js_card-container").append(`<img alt="Mindbug ${i}" loading="lazy" class="card" src="./img/mindbugs/mindbug_${i}.jpg">`);
    }

    for (let i = 1; i < numberOfMindfrogs + 1; i++) {
        $(".js_card-container").append(`<img alt="Mindbug ${i}" loading="lazy" class="card" src="./img/mindbugs/mindfrog_${i}.jpg">`);
    }
}

function placeAlternate() {
    let numberOfAlternate = 10;

    for (let i = 1; i < numberOfAlternate + 1; i++) {
        $(".js_card-container").append(`<img alt="Alternate Art ${i}" loading="lazy" class="card" src="./img/alternate/alternate_${i}.jpg">`);
    }
}