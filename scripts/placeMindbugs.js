import { scrollToResults } from "./placeCards.js";

export function placeMindbugs() {
    let numberOfMindbugs = 12;
    let numberOfMindfrogs = 2;

    $(".js_card-container").empty();
    $(".js_card-container").removeClass("card-container--hidden");
    $(".js_results").css("opacity", "0");

    for (let i = 1; i < numberOfMindbugs + 1; i++) {
        $(".js_card-container").append(`<img alt="Mindbug ${i}" loading="lazy" class="card" src="./img/mindbugs/mindbug_${i}.jpg">`);
    }

    for (let i = 1; i < numberOfMindfrogs + 1; i++) {
        $(".js_card-container").append(`<img alt="Mindbug ${i}" loading="lazy" class="card" src="./img/mindbugs/mindfrog_${i}.jpg">`);
    }

    scrollToResults();
}