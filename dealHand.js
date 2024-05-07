import { prepareForCards } from "./script.js";
import { placeCards } from "./placeCards.js";

export function dealHand(creatures) {
    let array = creatures;
    let [firstContact, addOn, eternity, evolution, promo] = checkSets2();
    array = getPack(array, firstContact, addOn, eternity, evolution, promo);
    let handOfCards = [];
    let usedNumbersArray = [];

    addCardToHand();

    function addCardToHand() {
        let randomNumber = Math.floor(Math.random()*(array.length));
        let howMany = 0;
        $(usedNumbersArray).each(function() {
            if (this == randomNumber) {
                howMany++;
            }
        })
        if (array[randomNumber].evolved == true) {
            addCardToHand();
            return;
        }
        if (howMany == 0) {
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        } else if (howMany == 1) {
            if (!array[randomNumber].double) {
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

export function getPack(array, firstContact, addOn, eternity, evolution, promo) {
    if (!firstContact) {
        array = array.filter(creature => creature.pack != "First Contact");
    }

    if (!addOn) {
        array = array.filter(creature => creature.pack != "First Contact: Add-On");
    }

    if (!eternity) {
        array = array.filter(creature => creature.pack != "Beyond Eternity");
    }

    if (!evolution) {
        array = array.filter(creature => creature.pack != "Beyond Evolution");
    }

    if (!promo) {
        array = array.filter(creature => creature.pack != "Promo 2022");
        array = array.filter(creature => creature.pack != "Promo 2023");
    }

    return array;
}

function checkSets2() {
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
    let promo;
    if($('.first-contact2').is(':checked')){
        firstContact = true;
    }
    if($('.add-on2').is(':checked')){
        addOn = true;
    }
    if($('.eternity2').is(':checked')){
        eternity = true;
    }
    if($('.evolution2').is(':checked')){
        evolution = true;
    }
    if($('.promo2').is(':checked')){
        promo = true;
    }
    return [firstContact, addOn, eternity, evolution, promo];
}