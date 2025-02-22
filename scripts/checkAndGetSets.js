export function checkSets() {
    let firstContact = $('.js_first-contact').is(':checked');
    let newServants = $('.js_add-on').is(':checked');
    let eternity = $('.js_eternity').is(':checked');
    let evolution = $('.js_evolution').is(':checked');
    let promo22 = $('.js_promo-22').is(':checked');
    let promo23 = $('.js_promo-23').is(':checked');

    return [firstContact, newServants, eternity, evolution, promo22, promo23];
}

export function checkKeywords() {
    let poisonous = $('.js_poisonous').is(':checked');
    let hunter = $('.js_hunter').is(':checked');
    let frenzy = $('.js_frenzy').is(':checked');
    let tough = $('.js_tough').is(':checked');
    let sneaky = $('.js_sneaky').is(':checked');

    return [poisonous, hunter, frenzy, tough, sneaky];
}

export function checkTriggers() {
    let play = $('.js_play').is(':checked');
    let attack = $('.js_attack').is(':checked');
    let defeated = $('.js_defeated').is(':checked');
    let action = $('.js_action').is(':checked');
    let discard = $('.js_discard').is(':checked');

    return [play, attack, defeated, action, discard];
}

export function checkOther() {
    let boost = $('.js_boost').is(':checked');
    let evolved = $('.js_evolved').is(':checked');
    let single = $('.js_single').is(':checked');
    let double = $('.js_double').is(':checked');

    return [boost, evolved, single, double];
}

export function checkPower() {
    let atLeast = $('.js_power-at-least').is(':checked');
    let atMost = $('.js_power-at-most').is(':checked');
    let exactly = $('.js_power-exactly').is(':checked');
    let parent;

    if (atLeast) {
        parent = $('.js_power-at-least').parent();
    } else if (atMost) {
        parent = $('.js_power-at-most').parent();
    } else if (exactly) {
        parent = $('.js_power-exactly').parent();
    }

    let select = $(parent).children('select');
    let powerNumber = parseInt($(select).val());

    return [atLeast, atMost, exactly, powerNumber];
}

export function checkOrder() {
    let alph = $('.js_alph').is(':checked');
    let power = $('.js_power').is(':checked');
    let revPower = $('.js_rev-power').is(':checked');

    return [alph, power, revPower];
}

export function getPack(array, firstContact, newServants, eternity, evolution, promo22, promo23) {
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