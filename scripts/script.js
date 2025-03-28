import { placeCards } from './placeCards.js';
import { dealHand } from './dealHand.js';
import { highlightTab, openFilter, openHand, openName, openCustomDeck } from './openTabs.js';
import { liveSearch } from './liveSearch.js';
import { openModal, closeModal } from './modalControl.js';
import { showAllCards } from './customDeck.js';
import { checkAndUncheckInputs } from './inputCommand.js';
import { getCards } from './getCards.js';
import { placeOtherCards } from './placeOtherCards.js';

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
    openFilter();
}

// When an input or related button is clicked, check/uncheck all relevant input checkboxes
$(".js_criteria").click(function() {
    let clickedInput = this;
    checkAndUncheckInputs(clickedInput);
});

$(".js_filter-btn").click(function() {
    if ($(".js_mindbug").is(':checked') || $(".js_alternate").is(':checked')) {
        placeOtherCards();
    } else {
        let array = getCards();
        prepareForCards(array);
        placeCards(array, creatures);
    }
})

$(".js_hand").click(function(e) {
    let numberChecked = 0;
    let handInputs = $(".js_hand");

    $(handInputs).each(function(index, input) {
        if ($(input).is(':checked')) {
            numberChecked++;
        }
    });
    
    if (numberChecked == 0) {
        e.preventDefault();
    }
})

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

export function prepareForCards(array) {
    $(".js_card-container").empty();
    $(".js_results").css("opacity", "1");
    $(".js_card-container").removeClass("card-container--hidden");
    $(".results").text(`- ${array.length} results found -`);
}
