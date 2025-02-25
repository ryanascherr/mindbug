import { getImageName } from "./placeCards.js";
import { creatures } from "./script.js";

//TODO Fix when change tabs
//TODO Fix evolution conditional

export function showAllCards() {
    $(".js_custom-deck-card-options").empty();
    let resetCreatures = creatures;
    $(resetCreatures).each(function(index) {

        if (this.evolution) {
            if (this.name != "Cloud Lady" && this.name != "Curious Tadpole" && this.name != "Kitten Crewmate" && this.name != "Tuckbox Mimic" && this.name != "Waddling Recruit" && this.name != "Wildsprout") {
                return;
            }
        }

        let name = getImageName(this);

        $(".js_custom-deck-card-options").append(`
            <div class="custom-deck-items">
                <img alt="${this.name}. ${this.ability}" loading="lazy" class="card" data-index="${index}" src="./img/cards/${name}.jpg">
                <button class="btn btn--size-sm js_add-to-deck-btn" data-index="${index}">Add</button>
            </div>`);
    });
}

$(document).on('click','.js_add-to-deck-btn',function(e){

    let creatureIndex = parseInt($(this).attr('data-index'));
    let isAlreadyThere = false;

    checkIfAlreadyThere(creatureIndex);
    function checkIfAlreadyThere(creatureIndex) {
        if ($(`.js_custom-card-number[data-index='${creatureIndex}']`).length != 0) {
            isAlreadyThere = true;
        };
    }

    if (isAlreadyThere) {
        
        let numberDiv = $(`.js_custom-card-number[data-index='${creatureIndex}']`);
        let currentNumber = parseInt($(`.js_custom-card-number[data-index='${creatureIndex}']`).text());
        if (currentNumber == 26) return;
        let newNumber = currentNumber+1;
        $(numberDiv).text(newNumber);
        updateCustomDeckCardCounter();
        resetCustomDeckLink();
    } else {
        addToCustomDeck(creatureIndex);
        $(this).parent().addClass("custom-deck-items--border");
        $(".custom-deck-link-display").text("");
    }
});

$(document).on('click','.js_custom-deck-remove',function(e){
    let index = $(this).attr('data-index');
    $(this).parent().remove();
    let cardOnLeft = $(".card-container").find(`[data-index='${index}']`);
    $(cardOnLeft).parent().removeClass("custom-deck-items--border");
    $(".js_custom-deck-link").text("");
    updateCustomDeckCardCounter();
    resetCustomDeckLink();
});

function addToCustomDeck(creatureIndex) {
    let creature = creatures[creatureIndex];
    let name = creature.name;

    if (name == "") return;
    
    name = name.replace(/ /g,"_");

    $(".custom-deck-holder").append(`
        <div class="custom-deck-holder__item js_custom-deck-holder-item">
            <img alt="${creature.name}. ${creature.ability}" loading="lazy" class="card custom-deck-holder__card js_custom-deck-card" data-index="${creatureIndex}" src="./img/cards/${name}.jpg">
            <div class="custom-card-controls change-card-amount-btns">
                <button class="custom-card-controls__btn js_custom-card-subtract custom-subtract-btn">-</button>
                <div class="custom-card-controls__number js_custom-card-number" data-index="${creatureIndex}">1</div>
                <button class="custom-card-controls__btn js_custom-card-add custom-add-btn">+</button>
            </div>
            <button class="btn btn--size-sm custom-deck-holder__remove-btn js_custom-deck-remove" data-index="${creatureIndex}">Remove</button> 
        </div>`)

    updateCustomDeckCardCounter();
}

$(".js_custom-deck-create-link-btn").click(function(e) {
    let customDeckCards = $(".js_custom-deck-card");
    let arrayOfIndexes = [];
    let arrayOfLetters = [];
    let cardContainers = $(".js_custom-deck-holder-item");
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

    $(".js_custom-deck-copy-deck-btn").attr('data-url', customURL);

    $(".js_custom-deck-link").val(customURL);

    $(".js_custom-deck-copy-deck-btn").removeClass("disabled");
    $(".js_custom-deck-link").removeClass("hidden");
});

function updateCustomDeckCardCounter() {
    let numberOfCardsInDeck = 0;
    let cardsInDeck = $(".js_custom-deck-holder-item");
    cardsInDeck.each(function() {
        let numberDiv = $(this).find(".js_custom-card-number");
        numberDiv = numberDiv[0];
        let currentNumber = parseInt($(numberDiv).text());
        numberOfCardsInDeck += currentNumber;
    });
    $(".js_custom-deck-card-counter").text(numberOfCardsInDeck);
    if ($(".js_custom-deck-card-counter").text() == "0") {
        $(".js_custom-deck-create-link-btn").addClass("btn--hidden");
        $(".js_custom-deck-copy-deck-btn").addClass("btn--hidden");
        $(".js_custom-deck-link").addClass("hidden");
    } else {
        $(".js_custom-deck-create-link-btn").removeClass("btn--hidden");
        $(".js_custom-deck-copy-deck-btn").removeClass("btn--hidden");
    }
    $(".js_custom-deck-link").addClass("hidden");
};

$(document).on('click','.js_custom-card-add',function(e){
    let numberDiv = $(this).parent().children("div");
    numberDiv = numberDiv[0];
    let currentNumber = parseInt($(numberDiv).text());
    if (currentNumber == 26) return;
    let newNumber = currentNumber+1;
    $(numberDiv).text(newNumber);
    updateCustomDeckCardCounter();
    resetCustomDeckLink();
});

$(document).on('click','.js_custom-card-subtract',function(e){
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
    $(".js_custom-deck-copy-deck-btn").addClass("disabled");
}

$(".js_custom-deck-copy-deck-btn").click(function() {
    navigator.clipboard.writeText($(this).attr("data-url"));
})

$(".js_upload-deck-btn").click(function() {
    let link = $.trim($(".js_upload-deck-input").val());
    getLink(link);
})

let listOfCardLetters = [];
let listOfCardNumbers = [];
let numberOfCards = 0;

function getLink(link) {

    resetCards();

    if (!link.includes("?")) return;
    link = link.split("?");
    link = link[1];
    listOfCardNumbers = link.split("-");
    $(listOfCardNumbers).each(function( index ) {
        let letter = this[this.length-1];
        listOfCardLetters.push(letter);
    })

    placeUploadedCards();
}

function resetCards() {
    listOfCardLetters = [];
    listOfCardNumbers = [];
}

function placeUploadedCards() {
    resetCardAvailability();

    let indexOfArray = 0;
    $(listOfCardNumbers).each(function( index ) {
        let currentCardNumber = parseInt(this);
        $(creatures).each(function( index ) {
            if (currentCardNumber == index) {

                let name = this.name;
                name = name.replace(/ /g,"_");
                
                let ability = this.ability;


                markCardAsSelected(index);

                let howManyOfThisCard = listOfCardLetters[indexOfArray];
                howManyOfThisCard = howManyOfThisCard.charCodeAt(0) - 96;
                numberOfCards = numberOfCards + howManyOfThisCard;

                $(".custom-deck-holder").append(`
                    <div class="custom-deck-holder__item js_custom-deck-holder-item">
                        <img alt="${name}. ${ability}" loading="lazy" class="card custom-deck-holder__card js_custom-deck-card" data-index="${index}" src="./img/cards/${name}.jpg">
                        <div class="custom-card-controls change-card-amount-btns">
                            <button class="custom-card-controls__btn js_custom-card-subtract custom-subtract-btn">-</button>
                            <div class="custom-card-controls__number js_custom-card-number">${howManyOfThisCard}</div>
                            <button class="custom-card-controls__btn js_custom-card-add custom-add-btn">+</button>
                        </div>
                        <button class="btn btn--size-sm custom-deck-holder__remove-btn js_custom-deck-remove" data-index="${index}">Remove</button> 
                    </div>`
                );

                updateCustomDeckCardCounter();
            };
        });
        indexOfArray++; 
    });
}

function resetCardAvailability() {
    let allCards = $(".custom-deck-items");
    $(allCards).each(function( index ) {
        let card = $(this)[0];
        $(card).removeClass("custom-deck-items--border");
    });
    $(".custom-deck-holder").empty();
}

function markCardAsSelected(index) {
    let card = $(`.custom-deck-items img[data-index='${index}']`);
    $(card).parent().addClass("custom-deck-items--border");
}

