import { prepareForCards } from "./script.js";
import { placeCards } from "./placeCards.js";

export function liveSearch(inputVal, creatures) {
    let array = [];
    $(creatures).each(function() {
        let creature = this;
        let name = creature.name.toLowerCase();
        let ability;
        let doesKeywordMatch = false;

        if (creature.ability) {
            ability = creature.ability.toLowerCase()
        } else {
            ability = "";
        }

        if (creature.keywords.length != 0) {
            $(creature.keywords).each(function( index, value ) {
                if (inputVal.includes(value.name.toLowerCase())) {
                    doesKeywordMatch = true;
                }
            });
        }

        if (ability.includes(inputVal) || name.includes(inputVal) || doesKeywordMatch) {
            array.push(this);
        }
    })
    prepareForCards(array);
    placeCards(array, creatures);
}