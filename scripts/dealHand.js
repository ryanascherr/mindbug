import { prepareForCards } from "./script.js";
import { placeCards } from "./placeCards.js";

export function dealHand(creatures) {
    let array = creatures;
    let [firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, battlefruitAddOn, promo2022, promo2023, promo2024] = checkSetsHand();
    array = getSet(array, firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, battlefruitAddOn, promo2022, promo2023, promo2024);
    let handOfCards = [];
    let usedNumbersArray = [];

    createHand();

    function createHand() {
        let randomNumber = Math.floor(Math.random()*(array.length));
        let howManyInHand = 0;
    
        $(usedNumbersArray).each(function() {
            if (this == randomNumber) {
                howManyInHand++;
            }
        })
    
        // If creature is a second or third evolution, do not add to hand and start again
        if (array[randomNumber].evolution == true && array[randomNumber].secondEvolution == null) {
            createHand();
            return;
        }
        
        // If this card isn't already in hand, add it to hand
        // If this card is already in hand, but there are two copies of the card, add it to hand
        if (howManyInHand == 0) {
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        } else if (howManyInHand == 1 && array[randomNumber].amount == 2) {
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        }
        
        if (handOfCards.length >= 5) {
            prepareForCards(handOfCards);
            let allowEvolutions = false;
            placeCards(handOfCards, creatures, allowEvolutions);
        } else {
            createHand();
        }
    }
}

function checkSetsHand() {
    let firstContact;
    let newServants;
    let eternity;
    let evolution;
    let kingdom;
    let galaxy;
    let kot;
    let tagTeam;
    let battlefruitAddOn;
    let promo2022;
    let promo2023;
    let promo2024;

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
    if($('.js_hand-kingdom').is(':checked')){
        kingdom = true;
    }
    if($('.js_hand-galaxy').is(':checked')){
        galaxy = true;
    }
    if($('.js_hand-kot').is(':checked')){
        kot = true;
    }
    if($('.js_hand-tag-team').is(':checked')){
        tagTeam = true;
    }
    if($('.js_hand-battlefruit-add-on').is(':checked')){
        battlefruitAddOn = true;
    }
    if($('.js_hand-promo-2022').is(':checked')){
        promo2022 = true;
    }
    if($('.js_hand-promo-2023').is(':checked')){
        promo2023 = true;
    }
    if($('.js_hand-promo-2024').is(':checked')){
        promo2024 = true;
    }
    return [firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, battlefruitAddOn, promo2022, promo2023, promo2024];
}

export function getSet(array, firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, battlefruitAddOn, promo2022, promo2023, promo2024) {
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

    if (!kingdom) {
        array = array.filter(creature => creature.set.name != "Battlefruit Kingdom");
    }

    if (!galaxy) {
        array = array.filter(creature => creature.set.name != "Battlefruit Galaxy");
    }

    if (!kot) {
        array = array.filter(creature => creature.set.name != "King of Tokyo");
    }

    if (!tagTeam) {
        array = array.filter(creature => creature.set.name != "Tag Team");
    }

    if (!battlefruitAddOn) {
        array = array.filter(creature => creature.set.name != "Battlefruit Add-On");
    }

    if (!promo2022) {
        array = array.filter(creature => creature.set.name != "Promo 2022");
    }

    if (!promo2023) {
        array = array.filter(creature => creature.set.name != "Promo 2023");
    }

    if (!promo2024) {
        array = array.filter(creature => creature.set.name != "Promo 2024");
    }

    return array;
}