export function checkSets() {
    let firstContact = $('.js_first-contact').is(':checked');
    let newServants = $('.js_new-servants').is(':checked');
    let eternity = $('.js_eternity').is(':checked');
    let evolution = $('.js_evolution').is(':checked');
    let kingdom = $('.js_kingdom').is(':checked');
    let galaxy = $('.js_galaxy').is(':checked');
    let kot = $('.js_kot').is(':checked');
    let tagTeam = $('.js_tag-team').is(':checked');
    let promo = $('.js_promo').is(':checked');

    return [firstContact, newServants, eternity, evolution, kingdom, galaxy, kot, tagTeam, promo];
}

export function checkKeywords() {
    let poisonous = $('.js_poisonous').is(':checked');
    let hunter = $('.js_hunter').is(':checked');
    let frenzy = $('.js_frenzy').is(':checked');
    let tough = $('.js_tough').is(':checked');
    let sneaky = $('.js_sneaky').is(':checked');
    let fast = $('.js_fast').is(':checked');
    let noKeywords = $('.js_no-keywords').is(':checked');

    return [poisonous, hunter, frenzy, tough, sneaky, fast, noKeywords];
}

export function checkTriggers() {
    let play = $('.js_play').is(':checked');
    let attack = $('.js_attack').is(':checked');
    let defeated = $('.js_defeated').is(':checked');
    let action = $('.js_action').is(':checked');
    let discard = $('.js_discard').is(':checked');
    let harvest = $('.js_harvest').is(':checked');
    let noTriggers = $('.js_no-triggers').is(':checked');

    return [play, attack, defeated, action, discard, harvest, noTriggers];
}

export function checkOther() {
    let boost = $('.js_boost').is(':checked');
    let evolved = $('.js_evolved').is(':checked');
    let single = $('.js_single').is(':checked');
    let double = $('.js_double').is(':checked');
    let octonite = $('.js_octonite').is(':checked');
    let otherTagTeam = $('.js_other-tag-team').is(':checked');
    let harmfulAbility = $('.js_harmful-ability').is(':checked');
    let noAbilty = $('.js_no-ability').is(':checked');
    let control = $('.js_control').is(':checked');
    let changePower = $('.js_change-power').is(':checked');
    let fromDiscard = $('.js_pd-discard').is(':checked');
    let attackBlock = $('.js_attack-block').is(':checked');
    let canGainLife = $('.js_heal').is(':checked');
    let canDamage = $('.js_damage').is(':checked');
    let winCondition = $('.js_win').is(':checked');
    let canDiscard = $('.js_can-discard').is(':checked');
    let giveKeywords = $('.js_give-keywords').is(':checked');
    let rollDie = $('.js_roll').is(':checked');
    let energy = $('.js_energy').is(':checked');

    return [boost, evolved, single, double, octonite, otherTagTeam, harmfulAbility, noAbilty, control, changePower, fromDiscard, attackBlock, canGainLife, canDamage, winCondition, canDiscard, giveKeywords, rollDie, energy];
}

export function checkPower() {
    let atLeast = $('.js_power-at-least').is(':checked');
    let atMost = $('.js_power-at-most').is(':checked');
    let exactly = $('.js_power-exactly').is(':checked');
    let parent;
    let parentTwo;


    if (atLeast && atMost) {
        parent = $('.js_power-at-least').parent();
        parentTwo = $('.js_power-at-most').parent();
    } else if (atLeast) {
        parent = $('.js_power-at-least').parent();
    } else if (atMost) {
        parent = $('.js_power-at-most').parent();
    } else if (exactly) {
        parent = $('.js_power-exactly').parent();
    }

    let select = $(parent).children('select');
    let powerNumber = parseInt($(select).val());
    let selectTwo;
    let powerNumberTwo;
    if (atLeast && atMost) {
        selectTwo = $(parentTwo).children('select');
        powerNumberTwo = parseInt($(selectTwo).val());
    }

    return [atLeast, atMost, exactly, powerNumber, powerNumberTwo];
}

export function checkOrder() {
    let alph = $('.js_alph').is(':checked');
    let power = $('.js_power').is(':checked');
    let revPower = $('.js_rev-power').is(':checked');
    let set = $('.js_order-set').is(':checked');

    return [alph, power, revPower, set];
}