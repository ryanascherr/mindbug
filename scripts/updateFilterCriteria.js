export function updateCriteria() {
    getKeyWordCriteria();
    getTriggerCriteria();
    getOtherCriteria();
    getOrderCriteria();
    getPackCriteria();
}

export function getKeyWordCriteria() {
    let poisonous = $('.poisonous').is(':checked');
    let hunter = $('.hunter').is(':checked');
    let frenzy = $('.frenzy').is(':checked');
    let tough = $('.tough').is(':checked')
    let sneaky = $('.sneaky').is(':checked')
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

    $(".criteria-keywords").text(message);
}

export function getTriggerCriteria() {
    let play = $('.play').is(':checked');
    let attack = $('.attack').is(':checked');
    let defeated = $('.defeated').is(':checked');
    let action = $('.action').is(':checked');
    let discard = $('.discard').is(':checked');
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

    $(".criteria-triggers").text(message);
}

export function getPackCriteria() {
    let firstContact = $('.first-contact').is(':checked');
    let addOn = $('.add-on').is(':checked');
    let eternity = $('.eternity').is(':checked');
    let evolution = $('.evolution').is(':checked');
    let promo22 = $('.promo-22').is(':checked');
    let promo23 = $('.promo-23').is(':checked');
    let message = "";
    let notTheFirst = false;

    if (firstContact && addOn && eternity && evolution && promo22 & promo23) {
        message = "All Sets";
        $(".criteria-packs").text(message);
        return;
    }

    if (firstContact) {
        message += "First Contact";
        notTheFirst = true;
    }

    if (addOn) {
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

    $(".criteria-packs").text(message);
}

export function getOtherCriteria() {
    let single = $('.single').is(':checked');
    let double = $('.double').is(':checked');
    let boost = $('.boost').is(':checked');
    let evolved = $('.evolved').is(':checked');
    let message1 = "";
    let message2 = "";
    let notTheFirst = false;

    if (single) {
        message2 = "that are Singles";
    }

    if (double) {
        message2 = "that are Doubles";
    }

    $(".criteria-others-2").text(message2);

    if (!boost && !evolved) {
        message1 = "";
        $(".criteria-others").text(message1);
        return;
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

    $(".criteria-others-1").text(message1);
}

export function getOrderCriteria() {
    let alph = $('.alph').is(':checked');
    let power = $('.power').is(':checked');
    let revPower = $('.rev-power').is(':checked');
    let message = "";

    if (alph) {
        message = "Name";
    } else if (power) {
        message = "Power";
    } else if (revPower) {
        message = "Reverse Power";
    }

    $(".criteria-order").text(message);
}

export function getPowerCriteria(power) {
    let atLeast = $('.power-at-least').is(':checked');
    let atMost = $('.power-at-most').is(':checked');
    let exactly = $('.power-exactly').is(':checked');
    let message = "";

    if (atLeast) {
        message = `with at least ${power} Power`;
    } else if (atMost) {
        message = `with at most ${power} Power`;
    } else if (exactly) {
        message = `with exactly ${power} Power`;
    }

    $(".criteria-power").text(message);
}