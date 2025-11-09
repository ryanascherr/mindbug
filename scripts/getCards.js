import { creatures } from './script.js';
import { checkSets, checkKeywords, checkTriggers, checkOther, checkPower, checkOrder } from './checkFilters.js';
import { getSets, getKeywords, getTriggers, getOther, getPower, getOrder } from './getFilteredCards.js';

export function getCards() {
    let array = creatures;
    
        let [firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, promo] = checkSets();
        let [poisonous, hunter, frenzy, tough, sneaky, fast, noKeywords] = checkKeywords();
        let [play, attack, defeated, action, discard, harvest, noTriggers] = checkTriggers();
        let [boost, evolved, single, double, octonite, otherTagTeam, harmfulAbility, noAbility, control, changePower, fromDiscard, attackBlock, canGainLife, canDamage, winCondition, canDiscard, giveKeywords, rollDie, energy] = checkOther();
        let [atLeast, atMost, exactly, powerNumber, powerNumberTwo] = checkPower();
        let [alph, power, revPower, set] = checkOrder();
        
        array = getSets(array, firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, promo);
        array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky, fast, noKeywords);
        array = getTriggers(array, play, attack, defeated, action, discard, harvest, noTriggers);
        array = getOther(array, boost, evolved, single, double, octonite, otherTagTeam, harmfulAbility, noAbility, control, changePower, fromDiscard, attackBlock, canGainLife, canDamage, winCondition, canDiscard, giveKeywords, rollDie, energy);
        array = getPower(array, atLeast, atMost, exactly, powerNumber, powerNumberTwo);
        array = getOrder(array, alph, power, revPower, set);

        return array;
}