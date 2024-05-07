import { scrollToResults } from "./script.js";

export function placeCards(arrayOfCardsToPlace, arrayOfAllCreatures, allowEvolutions) {
    
    if (arrayOfCardsToPlace.length > 0) {
        $(".card-container").removeClass("grid-one-column");
        $(arrayOfCardsToPlace).each(function() {
            if (this.evolved) return;

            let name = getImageName(this);

            $(".card-container").append(`<img alt="${this.name}. ${this.ability}" loading="lazy" class="card" src="./img/cards/${name}.jpg">`);

            if (this.secondEvolution && allowEvolutions != false) {
                placeEvolvedCards(this, arrayOfAllCreatures);
            }
        });
    } else {
        $(".card-container").append(`<div><h2 style="padding: 15px;">Sorry human, no results were found with your search criteria. Try again!</h2><div style="display: flex; justify-content: center;"><img style="max-width: 100%;" src="./img/wallpaper/mindbug.png"></div></div>`);
        $(".card-container").addClass("grid-one-column");
    }

    if (!$(".results").hasClass("d-none")) {
        scrollToResults();
    }
}

function getImageName(card) {
    let name = card.name;
    if (name == "") return;
    name = name.split(" ");
    if (name.length == 2) {
        name = name[0] + "_" + name[1];
    } else if (name.length == 3) {
        name = name[0] + "_" + name[1] + "_" + name[2];
    } else if (name.length == 4) {
        name = name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3];
    }
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