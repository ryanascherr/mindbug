export function checkSets() {
    let firstContact = $('.first-contact').is(':checked');
    let addOn = $('.add-on').is(':checked');
    let eternity = $('.eternity').is(':checked');
    let evolution = $('.evolution').is(':checked');
    let promo22 = $('.promo-22').is(':checked');
    let promo23 = $('.promo-23').is(':checked');

    return [firstContact, addOn, eternity, evolution, promo22, promo23];
}

export function checkKeywords() {
    let poisonous = $('.poisonous').is(':checked');
    let hunter = $('.hunter').is(':checked');
    let frenzy = $('.frenzy').is(':checked');
    let tough = $('.tough').is(':checked');
    let sneaky = $('.sneaky').is(':checked');

    return [poisonous, hunter, frenzy, tough, sneaky];
}

export function checkTriggers() {
    let play = $('.play').is(':checked');
    let attack = $('.attack').is(':checked');
    let defeated = $('.defeated').is(':checked');
    let action = $('.action').is(':checked');
    let discard = $('.discard').is(':checked');

    return [play, attack, defeated, action, discard];
}

export function checkOther() {
    let boost = $('.boost').is(':checked');
    let evolved = $('.evolved').is(':checked');
    let single = $('.single').is(':checked');
    let double = $('.double').is(':checked');

    return [boost, evolved, single, double];
}

export function checkPower() {
    let atLeast = $('.power-at-least').is(':checked');
    let atMost = $('.power-at-most').is(':checked');
    let exactly = $('.power-exactly').is(':checked');
    let parent;

    if (atLeast) {
        parent = $('.power-at-least').parent();
    } else if (atMost) {
        parent = $('.power-at-most').parent();
    } else if (exactly) {
        parent = $('.power-exactly').parent();
    }

    let select = $(parent).children('select');
    let powerNumber = parseInt($(select).val());

    return [atLeast, atMost, exactly, powerNumber];
}

export function checkOrder() {
    let alph = $('.alph').is(':checked');
    let power = $('.power').is(':checked');
    let revPower = $('.rev-power').is(':checked');

    return [alph, power, revPower];
}

export function getPack(array, firstContact, addOn, eternity, evolution, promo22, promo23) {
    if (!firstContact) {
        array = array.filter(creature => creature.pack != "First Contact");
    }

    if (!addOn) {
        array = array.filter(creature => creature.pack != "First Contact: Add-On");
    }

    if (!eternity) {
        array = array.filter(creature => creature.pack != "Beyond Eternity");
    }

    if (!evolution) {
        array = array.filter(creature => creature.pack != "Beyond Evolution");
    }

    if (!promo22) {
        array = array.filter(creature => creature.pack != "Promo 2022");
    }

    if (!promo23) {
        array = array.filter(creature => creature.pack != "Promo 2023");
    }

    return array;
}

export function getKeywords(array, poisonous, hunter, frenzy, tough, sneaky) {
    if (poisonous) {
        array = array.filter(creature => creature.keywords.poisonous == true);
    }

    if (hunter) {
        array = array.filter(creature => creature.keywords.hunter == true);
    }

    if (frenzy) {
        array = array.filter(creature => creature.keywords.frenzy == true);
    }

    if (tough) {
        array = array.filter(creature => creature.keywords.tough == true);
    }

    if (sneaky) {
        array = array.filter(creature => creature.keywords.sneaky == true);
    }

    return array;
}

export function getTriggers(array, play, attack, defeated, action, discard) {
    if (play) {
        array = array.filter(creature => creature.triggers.play == true);
    }

    if (attack) {
        array = array.filter(creature => creature.triggers.attack == true);
    }

    if (defeated) {
        array = array.filter(creature => creature.triggers.defeated == true);
    }

    if (action) {
        array = array.filter(creature => creature.triggers.action == true);
    }

    if (discard) {
        array = array.filter(creature => creature.triggers.discard == true);
    }

    return array;
}

export function getOther(array, boost, evolved, single, double) {
    if (single) {
        array = array.filter(creature => creature.double == false);
    }

    if (double) {
        array = array.filter(creature => creature.double == true);
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