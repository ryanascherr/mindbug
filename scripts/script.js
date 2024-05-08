import * as creaturesArray from './creatures.js';
import { placeCards, getImageName } from './placeCards.js';
import { updateCriteria, getKeyWordCriteria, getOrderCriteria, getOtherCriteria, getPackCriteria, getTriggerCriteria, getPowerCriteria } from './updateFilterCriteria.js';
import { checkKeywords, checkOrder, checkOther, checkPower, checkSets, checkTriggers, getKeywords, getOrder, getOther, getPack, getPower, getTriggers } from './checkAndGetSets.js';
import { dealHand } from './dealHand.js';
import { highlightTab, openFilter, openHand, openName, openCustomDeck } from './openTabs.js';
import { liveSearch } from './liveSearch.js';
import { openModal, closeModal } from './modalControl.js';

const creatures = creaturesArray.creatures;

$(".order").click(function() {
    $('.order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".number").click(function() {
    if ($(this).hasClass("single")) {
        $('.double').prop('checked', false);
    } else {
        $('.single').prop('checked', false);
    }
})

$('select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');

    if($(relatedInput).is(':checked')){
        getPowerCriteria(power);
    }
});

$(".power-c").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');
    let power = parseInt($(select).val());

    if ($(input).is(':checked')) {
        $('.power-c').prop('checked', false);
        $(input).prop('checked', true);
        $('.power-select').prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }

    getPowerCriteria(power);
});

$(".pack").click(function(e) {
    if ($(".pack").is(':checked')) {
        getPackCriteria();
    } else {
        e.preventDefault();
    }
})

$(".criteria").click(function() {
    updateCriteria();
});

$(".filter-btn").click(function() {
    let array = creatures;

    let [firstContact, addOn, eternity, evolution, promo22, promo23] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky] = checkKeywords();
    let [play, attack, defeated, action, discard] = checkTriggers();
    let [boost, evolved, single, double] = checkOther();
    let [atLeast, atMost, exactly, powerNumber] = checkPower();
    let [alph, power, revPower] = checkOrder();
    
    array = getPack(array, firstContact, addOn, eternity, evolution, promo22, promo23);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, action, discard);
    array = getOther(array, boost, evolved, single, double);
    array = getPower(array, atLeast, atMost, exactly, powerNumber);
    array = getOrder(array, alph, power, revPower);

    prepareForCards(array);
    placeCards(array, creatures);
})

export function prepareForCards(array) {
    $(".card-container").empty();
    $(".results").text(`- ${array.length} results found -`);
}

export function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".results").offset().top
    });
}

$(".deal-hand").click(function() {
    dealHand(creatures);
})

$(".open").click(function(e) {
    e.preventDefault();
    $(".card-container").empty();
    $(".results").text(``);
    if ($(this).hasClass("open-filter")) {
        highlightTab(this);
        openFilter();
    } else if ($(this).hasClass("open-name")) {
        highlightTab(this);
        openName();
    } else if ($(this).hasClass("open-hand")) {
        highlightTab(this);
        openHand();
    } else if ($(this).hasClass("open-custom-deck")) {
        highlightTab(this);
        openCustomDeck();
        showAllCards();
    }
})

$(".pack2").click(function(e) {
    let numberChecked = 0;
    if ($(".first-contact2").is(':checked')) {
        numberChecked++;
    }
    if ($(".add-on2").is(':checked')) {
        numberChecked++;
    }
    if ($(".eternity2").is(':checked')) {
        numberChecked++;
    }
    if ($(".evolution2").is(':checked')) {
        numberChecked++;
    }
    if ($(".promo2").is(':checked')) {
        numberChecked++;
    }
    if (numberChecked == 0) {
        e.preventDefault();
    } else {
        getPackCriteria();
    }
})

$("#myInput").keyup(function(event) {
    let inputVal = $("#myInput").val();
    inputVal = inputVal.toLowerCase();
    liveSearch(inputVal, creatures);
 });

let modal = $(".modal-content");

window.onclick = function(event) {
    let clickTarget = $(event.target);
    clickTarget = clickTarget[0];
    if ($(clickTarget).hasClass("modal-content")) {
        closeModal();
    }
};

$('body').on('click', '.card', function () {
    let src = $(this).attr('src');
    openModal(src);
});

$('body').on('click', '.modal-img, .modal span', function () {
    closeModal();
});

$('html').keyup(function(e){
    if(e.keyCode == 8 && $(".modal").hasClass("open")){
        closeModal();
    }
}) 

// CUSTOM DECK FUNCTIONALITY

function showAllCards() {
    $(".card-container").empty();
    let resetCreatures = creatures;
    $(resetCreatures).each(function(index) {

        if (this.evolved) return;

        let name = getImageName(this);

        $(".card-container").append(`<div class="custom-card-btn-container"><img alt="${this.name}. ${this.ability}" loading="lazy" class="card card-deck-option" data-index="${index}" src="./img/cards/${name}.jpg"><button class="add-to-deck-btn" data-index="${index}">Add</button></div>`);

    });
}

$(document).on('click','.add-to-deck-btn',function(e){
    let creatureIndex = parseInt($(this).attr('data-index'));
    addToCustomDeck(creatureIndex);
    $(this).parent().css({'pointer-events':'none','opacity':'50%'});
    $(".custom-deck-link-display").text("");
});

$(document).on('click','.remove-from-deck-btn',function(e){
    let index = $(this).attr('data-index');
    $(this).parent().remove();
    let cardOnLeft = $(".card-container").find(`[data-index='${index}']`);
    $(cardOnLeft).parent().css({'pointer-events':'all','opacity':'100%'});
    $(".custom-deck-link-display").text("");
    updateCustomDeckCardCounter();
    resetCustomDeckLink();
});

function addToCustomDeck(creatureIndex) {
    let creature = creatures[creatureIndex];
    let name = creature.name;
    if (name == "") return;
    name = name.split(" ");

    if (name.length == 2) {
        name = name[0] + "_" + name[1];
    } else if (name.length == 3) {
        name = name[0] + "_" + name[1] + "_" + name[2];
    } else if (name.length == 4) {
        name = name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3];
    };

    $(".custom-deck-holder").append(`
        <div class="card-to-be-added-container">
            <img alt="${creature.name}. ${creature.ability}" loading="lazy" class="card custom-deck-card" data-index="${creatureIndex}" src="./img/cards/${name}.jpg">
            <div class="change-card-amount-btns">
                <button class="custom-subtract-btn">-</button>
                <div>1</div>
                <button class="custom-add-btn">+</button>
            </div>
            <button class="remove-from-deck-btn" data-index="${creatureIndex}">Remove</button> 
        </div>`)

    updateCustomDeckCardCounter();
}

$(".finish-deck-create-link-btn").click(function(e) {
    let customDeckCards = $(".custom-deck-card");
    let arrayOfIndexes = [];
    let arrayOfLetters = [];
    let cardContainers = $(".card-to-be-added-container");
    $(customDeckCards).each(function(index) {
        let indexOfCard = $(this).attr('data-index');
        arrayOfIndexes.push(indexOfCard);
    })

    $(cardContainers).each(function() {
        let number = $(this).children("div").children("div");
        number = number[0];
        number = parseInt($(number).text());
        let letter = String.fromCharCode(96 + number);
        arrayOfLetters.push(letter);
    })

    let customURL = "https://ryanascherr.github.io/mindbug-deck/?";
    for (let i = 0; i < arrayOfIndexes.length; i++) {
        if (i == 0) {
            customURL += arrayOfIndexes[i] + arrayOfLetters[i];
        } else {
            customURL += "-" + arrayOfIndexes[i] + arrayOfLetters[i];
        }
    }

    $(".copy-deck-btn").attr('data-url', customURL);

    $(".deck-link").val(customURL);

    $(".copy-deck-btn").removeClass("disabled");
    $(".deck-link-container").removeClass("d-none");
});

function updateCustomDeckCardCounter() {
    let numberOfCardsInDeck = 0;
    let cardsInDeck = $(".card-to-be-added-container");
    cardsInDeck.each(function() {
        let numberDiv = $(this).children("div").children("div");
        numberDiv = numberDiv[0];
        let currentNumber = parseInt($(numberDiv).text());
        numberOfCardsInDeck += currentNumber;
    });
    $(".custom-deck-card-counter").text(numberOfCardsInDeck);
    if ($(".custom-deck-card-counter").text() == "0") {
        $(".finish-deck-create-link-btn").addClass("d-none");
        $(".copy-deck-btn").addClass("d-none");
    } else {
        $(".finish-deck-create-link-btn").removeClass("d-none");
        $(".copy-deck-btn").removeClass("d-none");
    }
};

$(document).on('click','.custom-add-btn',function(e){
    let numberDiv = $(this).parent().children("div");
    numberDiv = numberDiv[0];
    let currentNumber = parseInt($(numberDiv).text());
    if (currentNumber == 26) return;
    let newNumber = currentNumber+1;
    $(numberDiv).text(newNumber);
    updateCustomDeckCardCounter();
    resetCustomDeckLink();
});

$(document).on('click','.custom-subtract-btn',function(e){
    let numberDiv = $(this).parent().children("div");
    numberDiv = numberDiv[0];
    let currentNumber = parseInt($(numberDiv).text());
    if (currentNumber == 1) return;
    let newNumber = currentNumber-1;
    $(numberDiv).text(newNumber);
    updateCustomDeckCardCounter();
    resetCustomDeckLink();
});

function resetCustomDeckLink() {
    $(".custom-deck-link-display").text("");
    $(".copy-deck-btn").addClass("disabled");
}

$(".copy-deck-btn").click(function() {
    navigator.clipboard.writeText($(this).attr("data-url"));
})
