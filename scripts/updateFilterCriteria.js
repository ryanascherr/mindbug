export function updateCriteria() {
    getSetCriteria();
    getKeyWordCriteria();
    getTriggerCriteria();
    getOtherCriteria();
    getOrderCriteria();
}

export function getSetCriteria() {
    let firstContact = $('.js_first-contact').is(':checked');
    let newServants = $('.js_new-servants').is(':checked');
    let eternity = $('.js_eternity').is(':checked');
    let evolution = $('.js_evolution').is(':checked');
    let promo22 = $('.js_promo-22').is(':checked');
    let promo23 = $('.js_promo-23').is(':checked');
    let message = "";
    let notTheFirst = false;

    if (firstContact && newServants && eternity && evolution && promo22 & promo23) {
        message = "All Sets";
        $(".js_criteria-sets").text(message);
        return;
    }

    if (firstContact) {
        message += "First Contact";
        notTheFirst = true;
    }

    if (newServants) {
        if (notTheFirst) {
            message += " & New Servants";
        } else {
            message += "New Servants"
        }
        notTheFirst = true;
    }

    if (eternity) {
        if (notTheFirst) {
            message += " & Beyond Eternity";
        } else {
            message += "Beyond Eternity"
        }
        notTheFirst = true;
    }

    if (evolution) {
        if (notTheFirst) {
            message += " & Beyond Evolution";
        } else {
            message += "Beyond Evolution"
        }
        notTheFirst = true;
    }

    if (promo22) {
        if (notTheFirst) {
            message += " & Promo Pack 2022";
        } else {
            message += "Promo Pack 2022"
        }
        notTheFirst = true;
    }

    if (promo23) {
        if (notTheFirst) {
            message += " & Promo Pack 2023";
        } else {
            message += "Promo Pack 2023"
        }
        notTheFirst = true;
    }

    $(".js_criteria-sets").text(message);
}

export function getKeyWordCriteria() {
    let poisonous = $('.js_poisonous').is(':checked');
    let hunter = $('.js_hunter').is(':checked');
    let frenzy = $('.js_frenzy').is(':checked');
    let tough = $('.js_tough').is(':checked')
    let sneaky = $('.js_sneaky').is(':checked')
    let message = "";
    let notTheFirst = false;

    if (poisonous || hunter || frenzy || tough || sneaky) {
        message = "with the keyword(s) "
    }

    if (poisonous) {
        message += "Poisonous";
        notTheFirst = true;
    }

    if (hunter) {
        if (notTheFirst) {
            message += " & Hunter";
        } else {
            message += "Hunter"
        }
        notTheFirst = true;
    }

    if (frenzy) {
        if (notTheFirst) {
            message += " & Frenzy";
        } else {
            message += "Frenzy"
        }
        notTheFirst = true;
    }

    if (tough) {
        if (notTheFirst) {
            message += " & Tough";
        } else {
            message += "Tough"
        }
        notTheFirst = true;
    }

    if (sneaky) {
        if (notTheFirst) {
            message += " & Sneaky";
        } else {
            message += "Sneaky"
        }
    }

    $(".js_criteria-keywords").text(message);
}

export function getTriggerCriteria() {
    let play = $('.js_play').is(':checked');
    let attack = $('.js_attack').is(':checked');
    let defeated = $('.js_defeated').is(':checked');
    let action = $('.js_action').is(':checked');
    let discard = $('.js_discard').is(':checked');
    let message = "";
    let notTheFirst = false;

    if (play || attack || defeated || action || discard) {
        message = "with the trigger(s) "
    }

    if (play) {
        message += "Play";
        notTheFirst = true;
    }

    if (attack) {
        if (notTheFirst) {
            message += " & Attack";
        } else {
            message += "Attack"
        }
        notTheFirst = true;
    }

    if (defeated) {
        if (notTheFirst) {
            message += " & Defeated";
        } else {
            message += "Defeated"
        }
        notTheFirst = true;
    }

    if (action) {
        if (notTheFirst) {
            message += " & Action";
        } else {
            message += "Action"
        }
        notTheFirst = true;
    }

    if (discard) {
        if (notTheFirst) {
            message += " & In Discard Pile";
        } else {
            message += "In Discard Pile"
        }
    }

    $(".js_criteria-triggers").text(message);
}

export function getPowerCriteria(power) {
    let atLeast = $('.js_power-at-least').is(':checked');
    let atMost = $('.js_power-at-most').is(':checked');
    let exactly = $('.js_power-exactly').is(':checked');
    let message = "";

    if (atLeast) {
        message = `with at least ${power} Power`;
    } else if (atMost) {
        message = `with at most ${power} Power`;
    } else if (exactly) {
        message = `with exactly ${power} Power`;
    }

    $(".js_criteria-power").text(message);
}

export function getOtherCriteria() {
    let single = $('.js_single').is(':checked');
    let double = $('.js_double').is(':checked');
    let boost = $('.js_boost').is(':checked');
    let evolved = $('.js_evolved').is(':checked');
    let message1 = "";
    let message2 = "";
    let notTheFirst = false;

    if (single) {
        message2 = "that are Singles";
    }

    if (double) {
        message2 = "that are Doubles";
    }

    $(".js_criteria-others-2").text(message2);

    if (!boost && !evolved) {
        message1 = "";
        $(".js_criteria-others").text(message1);
    }

    if (boost) {
        message1 += "that interact with Boost";
        notTheFirst = true;
    }

    if (evolved) {
        if (notTheFirst) {
            message1 += " & Evolution";
        } else {
            message1 += "that interact with Evolution"
        }
    }

    $(".js_criteria-others-1").text(message1);
}

export function getOrderCriteria() {
    let set = $('.js_order-set').is(':checked');
    let alph = $('.js_alph').is(':checked');
    let power = $('.js_power').is(':checked');
    let revPower = $('.js_rev-power').is(':checked');
    let message = "";

    if (set) {
        message = "Set";
    } else if (alph) {
        message = "Name";
    } else if (power) {
        message = "Decreasing Power";
    } else if (revPower) {
        message = "Increasing Power";
    }

    $(".js_criteria-order").text(message);
}