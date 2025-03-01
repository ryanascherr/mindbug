export function getSets(array, firstContact, newServants, eternity, evolution, promo22, promo23) {
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

    if (!promo22) {
        array = array.filter(creature => creature.set.name != "Promo 2022");
    }

    if (!promo23) {
        array = array.filter(creature => creature.set.name != "Promo 2023");
    }

    return array;
}

export function getKeywords(array, poisonous, hunter, frenzy, tough, sneaky) {

    function getCurrentKeyword(creature, keyword) {
        let isKeywordHere = false;
            let numberOfKeywords = creature.keywords.length;
            if (numberOfKeywords == 0) return;

            for (let i = 0; i < numberOfKeywords; i++) {
                let currentKeyword = creature.keywords[i];
                currentKeyword = currentKeyword.name;
                if (currentKeyword == keyword) {
                    isKeywordHere = true;
                };
            }

            if (isKeywordHere == true) return true;
    }

    if (poisonous) {
        array = array.filter(creature => getCurrentKeyword(creature, "Poisonous"));
    }

    if (hunter) {
        array = array.filter(creature => getCurrentKeyword(creature, "Hunter"));
    }

    if (frenzy) {
        array = array.filter(creature => getCurrentKeyword(creature, "Frenzy"));
    }

    if (tough) {
        array = array.filter(creature => getCurrentKeyword(creature, "Tough"));
    }

    if (sneaky) {
        array = array.filter(creature => getCurrentKeyword(creature, "Sneaky"));
    }

    return array;
}

export function getTriggers(array, play, attack, defeated, action, discard) {

    function getCurrentTrigger(creature, trigger) {
        let isTriggerHere = false;
            let numberOfTriggers = creature.triggers.length;
            if (numberOfTriggers == 0) return;

            for (let i = 0; i < numberOfTriggers; i++) {
                let currentTrigger = creature.triggers[i];
                currentTrigger = currentTrigger.name;
                if (currentTrigger == trigger) {
                    isTriggerHere = true;
                };
            }

            if (isTriggerHere == true) return true;
    }

    if (play) {
        array = array.filter(creature => getCurrentTrigger(creature, "Play"));
    }

    if (attack) {
        array = array.filter(creature => getCurrentTrigger(creature, "Attack"));
    }

    if (defeated) {
        array = array.filter(creature => getCurrentTrigger(creature, "Defeated"));
    }

    if (action) {
        array = array.filter(creature => getCurrentTrigger(creature, "Action"));
    }

    if (discard) {
        array = array.filter(creature => getCurrentTrigger(creature, "Discard"));
    }

    return array;
}

export function getOther(array, boost, evolved, single, double) {
    if (single) {
        array = array.filter(creature => creature.amount == 1);
    }

    if (double) {
        array = array.filter(creature => creature.amount == 2);
    }

    if (boost) {
        array = array.filter(creature => creature.boost == true);
    }

    if (evolved) {
        array = array.filter(creature => creature.evolution == true);
    }

    return array;
}

export function getPower(array, atLeast, atMost, exactly, powerNumber) {
    if (atLeast) {
        array = array.filter(creature => creature.power >= powerNumber);
    } else if (atMost) {
        array = array.filter(creature => creature.power <= powerNumber);
    } else if (exactly) {
        array = array.filter(creature => creature.power == powerNumber);
    }

    return array;
}

export function getOrder(array, alph, power, revPower) {
    if (alph) {
        array = array.sort(function(a, b) {
            return a === b ? 0 : a.name < b.name ? -1 : 1;
        });
    } else if (power) {
        array = array.sort((a, b) => b.power - a.power);
    } else if (revPower) {
        array = array.sort((a, b) => a.power - b.power);
    }

    return array;
}