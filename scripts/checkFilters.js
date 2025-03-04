export function checkSets() {
    let firstContact = $('.js_first-contact').is(':checked');
    let newServants = $('.js_new-servants').is(':checked');
    let eternity = $('.js_eternity').is(':checked');
    let evolution = $('.js_evolution').is(':checked');
    let kingdom = $('.js_kingdom').is(':checked');
    let galaxy = $('.js_galaxy').is(':checked');
    let promo22 = $('.js_promo-22').is(':checked');
    let promo23 = $('.js_promo-23').is(':checked');

    return [firstContact, newServants, eternity, evolution, kingdom, galaxy, promo22, promo23];
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