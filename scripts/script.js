import { placeCards, getImageName } from './placeCards.js';
import { updateCriteria, getSetCriteria, getPowerCriteria } from './updateFilterCriteria.js';
import { checkSets, checkKeywords, checkTriggers, checkOther, checkPower, checkOrder } from './checkFilters.js';
import { getSets, getKeywords, getTriggers, getOther, getPower, getOrder } from './getFilteredCards.js';
import { dealHand } from './dealHand.js';
import { highlightTab, openFilter, openHand, openName, openCustomDeck } from './openTabs.js';
import { liveSearch } from './liveSearch.js';
import { openModal, closeModal } from './modalControl.js';
import { showAllCards } from './customDeck.js';

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
export const creatures = data;
let modal = $(".modal-content");

initiate();
function initiate() {
    openFilter()
    updateCriteria();
}

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

$(".js_set").click(function(e) {
    if ($(".js_set").is(':checked')) {
        getSetCriteria();
    } else {
        e.preventDefault();
    }
})

$(".js_criteria").click(function() {
    updateCriteria();
});

$(".js_filter-btn").click(function() {
    let array = creatures;

    let [firstContact, newServants, eternity, evolution, kingdom, galaxy, promo22, promo23] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky] = checkKeywords();
    let [play, attack, defeated, action, discard] = checkTriggers();
    let [boost, evolved, single, double] = checkOther();
    let [atLeast, atMost, exactly, powerNumber] = checkPower();
    let [alph, power, revPower] = checkOrder();
    
    array = getSets(array, firstContact, newServants, eternity, evolution, kingdom, galaxy, promo22, promo23);
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
    $(".js_card-container").removeClass("card-container--hidden");
    $(".results").text(`- ${array.length} results found -`);
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
        getSetCriteria();
    }
})

$(".js_autocomplete").keyup(function(event) {
    let inputVal = $(".js_autocomplete").val();
    inputVal = inputVal.toLowerCase();
    liveSearch(inputVal, creatures);
 });

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
