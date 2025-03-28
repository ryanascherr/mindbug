
export function checkAndUncheckInputs(clickedInput) {
    if (clickedInput.classList.contains("js_order")) {
        setOrderCheckboxes(clickedInput);
    }
    if (clickedInput.classList.contains("js_keyword")) {
        setKeywordCheckboxes(clickedInput);
    }
    if (clickedInput.classList.contains("js_trigger")) {
        setTriggerCheckboxes(clickedInput);
    }
    if (clickedInput.classList.contains("js_power-c")) {
        setPowerCheckboxes(clickedInput);
    }
    if (clickedInput.classList.contains("js_number")) {
        setNumberCheckboxes(clickedInput);
    }
    if (clickedInput.classList.contains("js_clear-set")) {
        clearSetCheckboxes();
    }
    if (clickedInput.classList.contains("js_check-set")) {
        checkSetCheckboxes();
    }
    if (clickedInput.classList.contains("js_mindbug") || clickedInput.classList.contains("js_alternate")) {
        if ($(clickedInput).is(':checked')) {
            uncheckAllCheckboxes();
            $(clickedInput).prop('checked', true);
        }
    } else {
        $(".js_mindbug").prop('checked', false);
        $(".js_alternate").prop('checked', false);
    }
}

function setOrderCheckboxes(clickedInput) {
    $('.js_order').prop('checked', false);
    $(clickedInput).prop('checked', true);
}

function setKeywordCheckboxes(clickedInput) {
    if ($(clickedInput).hasClass("js_no-keywords")) {
        let keepNoKeywordsChecked = false;
        if ($(clickedInput).is(':checked')) {
            keepNoKeywordsChecked = true;
        }
        $('.js_keyword').prop('checked', false);
        if (keepNoKeywordsChecked) {
            $(clickedInput).prop('checked', true);
        }
    } else {
        $('.js_no-keywords').prop('checked', false);
    }
}

function setTriggerCheckboxes(clickedInput) {
    if ($(clickedInput).hasClass("js_no-triggers")) {
        let keepNoTriggersChecked = false;
        if ($(clickedInput).is(':checked')) {
            keepNoTriggersChecked = true;
        }
        $('.js_trigger').prop('checked', false);
        if (keepNoTriggersChecked) {
            $(clickedInput).prop('checked', true);
        }
    } else {
        $('.js_no-triggers').prop('checked', false);
    }
}

function setPowerCheckboxes(clickedInput) {
    let parent = $(clickedInput).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');

    if ($(input).is(':checked')) {
        $(input).prop('checked', true);
        if ($(input).hasClass("js_power-at-least") || $(input).hasClass("js_power-at-most")) {
            $(".js_power-exactly").prop('checked', false);
            $(".js_select-power-exactly").prop('disabled', true);
        } else {
            $(".js_power-at-least").prop('checked', false);
            $(".js_select-power-at-least").prop('disabled', true);
            $(".js_power-at-most").prop('checked', false);
            $(".js_select-power-at-most").prop('disabled', true);
        }
        $(input).prop('disabled', false);
        $(select).prop('disabled', false);
    } else {
        $(select).prop('disabled', true);
    }
}

function setNumberCheckboxes(clickedInput) {
    if ($(clickedInput).hasClass("js_single")) {
        $('.js_double').prop('checked', false);
    } else {
        $('.js_single').prop('checked', false);
    }
}

function clearSetCheckboxes() {
    $(".js_set").prop('checked', false);
}

function checkSetCheckboxes() {
    $(".js_set").prop('checked', true);
}

function uncheckAllCheckboxes() {
    $(".js_criteria").prop('checked', false);
}