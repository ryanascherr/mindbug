import { placeCards, getImageName } from './placeCards.js';
import { checkSets, checkKeywords, checkTriggers, checkOther, checkPower, checkOrder } from './checkFilters.js';
import { getSets, getKeywords, getTriggers, getOther, getPower, getOrder } from './getFilteredCards.js';
import { dealHand } from './dealHand.js';
import { highlightTab, openFilter, openHand, openName, openCustomDeck } from './openTabs.js';
import { liveSearch } from './liveSearch.js';
import { openModal, closeModal } from './modalControl.js';
import { showAllCards } from './customDeck.js';
// import { checkAndUncheckInputs } from './inpputCommand.js';

const supabaseURL = 'https://nvjgjpbkcoiifhnybhap.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52amdqcGJrY29paWZobnliaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTMxMTUsImV4cCI6MjA1NTU4OTExNX0.9muL9PqLj6rbVCS_7gblPp1wvVyAlNo4pikVqVXclMo';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('creatures').select(`
    id, name, power, ability, amount, boost, evolution, secondEvolution, thirdEvolution, place_octonite, tag_team, harmful_ability, change_control, change_power, get_from_discard_pile, cannot_attack, cannot_block, ability_can_gain_life, ability_can_damage, win_condition, ability_can_discard, give_keywords,
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

initiate();
function initiate() {
    openFilter()
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
$(".js_keyword").click(function() {
    if ($(this).hasClass("js_no-keywords")) {
        let keepNoKeywordsChecked = false;
        if ($(this).is(':checked')) {
            keepNoKeywordsChecked = true;
        }
        $('.js_keyword').prop('checked', false);
        if (keepNoKeywordsChecked) {
            $(this).prop('checked', true);
        }
    } else {
        $('.js_no-keywords').prop('checked', false);
    }
})
$(".js_trigger").click(function() {
    if ($(this).hasClass("js_no-triggers")) {
        let keepNoTriggersChecked = false;
        if ($(this).is(':checked')) {
            keepNoTriggersChecked = true;
        }
        $('.js_trigger').prop('checked', false);
        if (keepNoTriggersChecked) {
            $(this).prop('checked', true);
        }
    } else {
        $('.js_no-triggers').prop('checked', false);
    }
})

$('.js_select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');
});

$(".js_power-c").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');
    let power = parseInt($(select).val());

    if ($(input).is(':checked')) {
        $(input).prop('checked', true);
        if ($(input).hasClass("js_power-at-least") || $(input).hasClass("js_power-at-most")) {
            $(".js_power-exactly").prop('checked', false);
            $(".js_select-power-exactly").prop('disabled', true);
        } else {
            $(".js_power-at-least").prop('checked', false);
            $(".js_select-power-at-least").prop('disabled', true);
            $(".js_power-at-most").prop('checked', false);
            $(".js_select-power-at-most").prop('disabled', true);
        }
        $(input).prop('disabled', false);
        $(select).prop('disabled', false);
    } else {
        $(select).prop('disabled', true);
    }
});

$(".js_clear-set").click(function() {
    $(".js_set").prop('checked', false);
})
$(".js_check-set").click(function() {
    $(".js_set").prop('checked', true);
})

// $(".js_criteria").click(function() {
//     let clickedInput = this;
//     checkAndUncheckInputs(clickedInput);
// });

$(".js_filter-btn").click(function() {
    // getCards();
    let array = creatures;

    let [firstContact, newServants, eternity, evolution, kingdom, galaxy, tagTeam, promo] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky, fast, noKeywords] = checkKeywords();
    let [play, attack, defeated, action, discard, harvest, noTriggers] = checkTriggers();
    let [boost, evolved, single, double, octonite, otherTagTeam, harmfulAbility, noAbility, control, changePower, fromDiscard, attackBlock, canGainLife, canDamage, winCondition, canDiscard, giveKeywords] = checkOther();
    let [atLeast, atMost, exactly, powerNumber, powerNumberTwo] = checkPower();
    let [alph, power, revPower, set] = checkOrder();
    
    array = getSets(array, firstContact, newServants, eternity, evolution, kingdom, galaxy, tagTeam, promo);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky, fast, noKeywords);
    array = getTriggers(array, play, attack, defeated, action, discard, harvest, noTriggers);
    array = getOther(array, boost, evolved, single, double, octonite, otherTagTeam, harmfulAbility, noAbility, control, changePower, fromDiscard, attackBlock, canGainLife, canDamage, winCondition, canDiscard, giveKeywords);
    array = getPower(array, atLeast, atMost, exactly, powerNumber, powerNumberTwo);
    array = getOrder(array, alph, power, revPower, set);

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
    if ($(".js_hand-kingdom").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-galaxy").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-tag-team").is(':checked')) {
        numberChecked++;
    }
    if ($(".js_hand-promo").is(':checked')) {
        numberChecked++;
    }
    if (numberChecked == 0) {
        e.preventDefault();
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
