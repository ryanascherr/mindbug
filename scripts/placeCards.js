import { scrollToResults } from "./script.js";

export function placeCards(arrayOfCardsToPlace, arrayOfAllCreatures, allowEvolutions) {

    $(".js_card-container").removeClass("card-container--hidden");
    
    if (arrayOfCardsToPlace.length > 0) {
        // $(".js_card-container").removeClass("grid-one-column");
        $(arrayOfCardsToPlace).each(function() {
            if (this.evolved) return;

            let name = getImageName(this);

            $(".js_card-container").append(`<img alt="${this.name}. ${this.ability}" loading="lazy" class="card" src="./img/cards/${name}.jpg">`);

            if (this.secondEvolution && allowEvolutions != false) {
                placeEvolvedCards(this, arrayOfAllCreatures);
            }
        });
    } else {
        $(".js_card-container").append(`
            <div class="no-results">
                <p class="no-results__text">Sorry human, no results were found with your search criteria. Try again!</p>
                <img class="no-results__img" style="max-width: 100%;" src="./img/wallpaper/mindbug.png">
            </div>`);
        // $(".js_card-container").addClass("grid-one-column");
    }

    if (!$(".results").hasClass("results--hidden")) {
        scrollToResults();
    }
}

export function getImageName(card) {
    let name = card.name;
    
    name = name.replace(/ /g,"_");

    return name;
}

function placeEvolvedCards(creature, arrayOfAllCreaturesres) {
    let secondEvolutionName = creature.secondEvolution;
    let thirdEvolutionName = creature.thirdEvolution;

    let secondCreature;
    let thirdCreature;

    $(arrayOfAllCreaturesres).each(function() {
        if (this.name == secondEvolutionName) {
            secondCreature = this;
        }
        if (this.name == thirdEvolutionName) {
            thirdCreature = this;
        } 
    })

    let name = getImageName(secondCreature);

    $(".card-container").append(`<img alt="${creature.name}. ${creature.ability}" loading="lazy" class="card" src="./img/cards/${name}.jpg">`);

    name = getImageName(thirdCreature);

    $(".card-container").append(`<img alt="${creature.name}. ${creature.ability}" loading="lazy" class="card" src="./img/cards/${name}.jpg">`);
}