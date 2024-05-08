import { prepareForCards } from "./script.js";
import { placeCards } from "./placeCards.js";

export function liveSearch(inputVal, creatures) {
    let array = [];
    $(creatures).each(function() {
        let creature = this;
        let name = creature.name.toLowerCase();
        let ability;
        if (creature.ability) {
            ability = creature.ability.toLowerCase()
        } else {
            ability = "";
        }
        if (ability.includes(inputVal) || name.includes(inputVal)) {
            array.push(this);
        }
    })
    prepareForCards(array);
    placeCards(array, creatures);
}