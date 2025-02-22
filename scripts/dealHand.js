import { prepareForCards } from "./script.js";
import { placeCards } from "./placeCards.js";

export function dealHand(creatures) {
    let array = creatures;
    let [firstContact, newServants, eternity, evolution, promo] = checkSetsHand();
    array = getPack(array, firstContact, newServants, eternity, evolution, promo);
    let handOfCards = [];
    let usedNumbersArray = [];

    addCardToHand();

    //TODO Fix evolution code

    function addCardToHand() {
        let randomNumber = Math.floor(Math.random()*(array.length));
        let howMany = 0;
        $(usedNumbersArray).each(function() {
            if (this == randomNumber) {
                howMany++;
            }
        })
        if (array[randomNumber].evolution == true) {
            let creature = array[randomNumber];
            let name = creature.name;
            if (name != "Cloud Lady" && name != "Curious Tadpole" && name != "Kitten Crewmate" && name != "Tuckbox Mimic" && name != "Waddling Recruit" && name != "Wildsprout") {
                addCardToHand();
                return;
            }
        }
        if (howMany == 0) {
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        } else if (howMany == 1) {
            if (array[randomNumber].amount == 1) {
            } else {
                usedNumbersArray.push(randomNumber);
                handOfCards.push(array[randomNumber]);
            }
        } else if (howMany == 2) {
        }
        
        if (handOfCards.length >= 5) {
            prepareForCards(handOfCards);
            let allowEvolutions = false;
            placeCards(handOfCards, creatures, allowEvolutions);
        } else {
            addCardToHand();
        }
    }
}

export function getPack(array, firstContact, newServants, eternity, evolution, promo) {
    if (!firstContact) {
        array = array.filter(creature => creature.set.name != "First Contact");
    }

    if (!newServants) {
        array = array.filter(creature => creature.set.name != "New Servants");
    }

    if (!eternity) {
        array = array.filter(creature => creature.set.name != "Beyond Eternity");
    }

    if (!evolution) {
        array = array.filter(creature => creature.set.name != "Beyond Evolution");
    }

    if (!promo) {
        array = array.filter(creature => creature.set.name != "Promo 2022");
        array = array.filter(creature => creature.set.name != "Promo 2023");
    }

    return array;
}

function checkSetsHand() {
    let firstContact;
    let newServants;
    let eternity;
    let evolution;
    let promo;
    if($('.js_hand-first-contact').is(':checked')){
        firstContact = true;
    }
    if($('.js_hand-new-servants').is(':checked')){
        newServants = true;
    }
    if($('.js_hand-eternity').is(':checked')){
        eternity = true;
    }
    if($('.js_hand-evolution').is(':checked')){
        evolution = true;
    }
    if($('.js_hand-promo').is(':checked')){
        promo = true;
    }
    return [firstContact, newServants, eternity, evolution, promo];
}