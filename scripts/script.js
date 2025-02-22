import { placeCards, getImageName } from './placeCards.js';
import { updateCriteria, getKeyWordCriteria, getOrderCriteria, getOtherCriteria, getPackCriteria, getTriggerCriteria, getPowerCriteria } from './updateFilterCriteria.js';
import { checkKeywords, checkOrder, checkOther, checkPower, checkSets, checkTriggers, getKeywords, getOrder, getOther, getPack, getPower, getTriggers } from './checkAndGetSets.js';
import { dealHand } from './dealHand.js';
import { highlightTab, openFilter, openHand, openName, openCustomDeck } from './openTabs.js';
import { liveSearch } from './liveSearch.js';
import { openModal, closeModal } from './modalControl.js';

//filter tab
    //text criteria display properly on tab open

//do not scroll on non-filter pages

const supabaseURL = 'https://nvjgjpbkcoiifhnybhap.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52amdqcGJrY29paWZobnliaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTMxMTUsImV4cCI6MjA1NTU4OTExNX0.9muL9PqLj6rbVCS_7gblPp1wvVyAlNo4pikVqVXclMo';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('creatures').select(`
    id, name, power, ability, amount, boost, evolution, secondEvolution, thirdEvolution,
    set (
        name
    ),
    keywords (
        name
    ),
    triggers (
        name
    )
`)
.order('id', { ascending: true });
const creatures = data;

$(".js_order").click(function() {
    $('.js_order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".js_number").click(function() {
    if ($(this).hasClass("js_single")) {
        $('.js_double').prop('checked', false);
    } else {
        $('.js_single').prop('checked', false);
    }
})

$('.js_select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');

    if($(relatedInput).is(':checked')){
        getPowerCriteria(power);
    }
});

$(".js_power-c").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');
    let power = parseInt($(select).val());

    if ($(input).is(':checked')) {
        $('.js_power-c').prop('checked', false);
        $(input).prop('checked', true);
        $('.js_power-select').prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }

    getPowerCriteria(power);
});

$(".js_pack").click(function(e) {
    if ($(".js_pack").is(':checked')) {
        getPackCriteria();
    } else {
        e.preventDefault();
    }
})

openFilter()
updateCriteria();

$(".js_criteria").click(function() {
    updateCriteria();
});

$(".js_filter-btn").click(function() {
    let array = creatures;

    let [firstContact, newServants, eternity, evolution, promo22, promo23] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky] = checkKeywords();
    let [play, attack, defeated, action, discard] = checkTriggers();
    let [boost, evolved, single, double] = checkOther();
    let [atLeast, atMost, exactly, powerNumber] = checkPower();
    let [alph, power, revPower] = checkOrder();
    
    array = getPack(array, firstContact, newServants, eternity, evolution, promo22, promo23);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, action, discard);
    array = getOther(array, boost, evolved, single, double);
    array = getPower(array, atLeast, atMost, exactly, powerNumber);
    array = getOrder(array, alph, power, revPower);

    prepareForCards(array);
    placeCards(array, creatures);
})

export function prepareForCards(array) {
    $(".js_card-container").empty();
    $(".results").text(`- ${array.length} results found -`);
}

export function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".results").offset().top
    });
}

$(".js_deal-hand-btn").click(function() {
    dealHand(creatures);
})

$(".js_tab").click(function(e) {
    e.preventDefault();
    $(".js_card-container").empty();
    $(".results").text(``);
    if ($(this).hasClass("js_tab-filter")) {
        highlightTab(this);
        openFilter();
    } else if ($(this).hasClass("js_tab-name")) {
        highlightTab(this);
        openName();
    } else if ($(this).hasClass("js_tab-hand")) {
        highlightTab(this);
        openHand();
    } else if ($(this).hasClass("js_tab-custom-deck")) {
        highlightTab(this);
        openCustomDeck();
        showAllCards();
    }
})

$(".js_hand").click(function(e) {
    let numberChecked = 0;
    if ($(".js_hand-first-contact").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-new-servants").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-eternity").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-evolution").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-promo").is(':checked')) {
        numberChecked++;
    }
    if (numberChecked == 0) {
        e.preventDefault();
    } else {
        getPackCriteria();
    }
})

$(".js_autocomplete").keyup(function(event) {
    let inputVal = $(".js_autocomplete").val();
    inputVal = inputVal.toLowerCase();
    liveSearch(inputVal, creatures);
 });

let modal = $(".modal-content");

$('body').on('click', '.card', function () {
    let src = $(this).attr('src');
    openModal(src);
});

$('body').on('click', '.modal', function () {
    closeModal();
});

$('html').keyup(function(e){
    if(e.keyCode == 8 && $(".modal").hasClass("open")){
        closeModal();
    }
}) 

// CUSTOM DECK FUNCTIONALITY

function showAllCards() {
    $(".js_custom-deck-card-options").empty();
    let resetCreatures = creatures;
    console.log(resetCreatures);
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
    addToCustomDeck(creatureIndex);
    $(this).parent().css({'pointer-events':'none','opacity':'50%'});
    $(".custom-deck-link-display").text("");
});

$(document).on('click','.js_custom-deck-remove',function(e){
    let index = $(this).attr('data-index');
    $(this).parent().remove();
    let cardOnLeft = $(".card-container").find(`[data-index='${index}']`);
    $(cardOnLeft).parent().css({'pointer-events':'all','opacity':'100%'});
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
                <div class="custom-card-controls__number js_custom-card-number">1</div>
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
