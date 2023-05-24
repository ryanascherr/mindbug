const creatures = [
    {
        name: "Axolotl Healer",
        power: 4,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Bee Bear",
        power: 8,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Brain Fly",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Chameleon Sniper",
        power: 1,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Compost Dragon",
        power: 3,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Deathweaver",
        power: 2,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Elephantopus",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Explosive Toad",
        power: 5,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact"
    },
    {
        name: "Ferret Bomber",
        power: 2,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Giraffodile",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Goblin Werewolf",
        power: 2,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Gorillion",
        power: 10,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Grave Robber",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Harpy Mother",
        power: 5,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact"
    },
    {
        name: "Kangasaurus Rex",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Killer Bee",
        power: 5,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Lone Yeti",
        power: 5,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Luchataur",
        power: 9,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Mysterious Mermaid",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Plated Scorpion",
        power: 2,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Rhino Turtle",
        power: 8,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Shark Dog",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Sharky Crab-Dog-Mummypus",
        power: 5,
        keywords: {
            poisonous: true,
            frenzy: true,
            tough: false,
            sneaky: true,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Shield Bugs",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Snail Hydra",
        power: 9,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Snail Thrower",
        power: 1,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Spider Owl",
        power: 3,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Strange Barrel",
        power: 6,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact"
    },
    {
        name: "Tiger Squirrel",
        power: 3,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Turbo Bug",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Tusked Extorter",
        power: 8,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Urchin Hurler",
        power: 5,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact"
    },
    {
        name: "Bugserker",
        power: 3,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Count Draculeech",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Creep from the Deep",
        power: 4,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Ferret Pacifier",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Froblin Instigator",
        power: 1,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Goreagle Alpha",
        power: 6,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Hamster Lion",
        power: 8,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Hungry Hungry Hamster",
        power: 2,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Hyenix",
        power: 7,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Majestic Manticore",
        power: 6,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "The Lurker",
        power: 4,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On"
    },
    {
        name: "Turf the Surfer",
        power: 8,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On"
    }
]

initialize();
function initialize() {
    sortByAlph();
}

function placeFirstContact() {
    $(creatures).each(function() {
        if (this.pack != "First Contact") return;
        let name = this.name;
        name = name.split(" ");
        if (name.length == 2) {
            name = name[0] + "_" + name[1];
        } else if (name.length == 3) {
            name = name[0] + "_" + name[1] + "_" + name[2];
        } else if (name.length == 4) {
            name = name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3];
        }
        $(".card-container").append(`<img data-keywords="${this.keywords}" class="card" src="./img/first-contact/${name}.png">`)
    });
}

function placeFirstContactAddOn() {
    $(creatures).each(function() {
        if (this.pack != "First Contact: Add-On") return;
        let name = this.name;
        name = name.split(" ");
        if (name.length == 2) {
            name = name[0] + "_" + name[1];
        } else if (name.length == 3) {
            name = name[0] + "_" + name[1] + "_" + name[2];
        } else if (name.length == 4) {
            name = name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3];
        }
        $(".card-container").append(`<img class="card" src="./img/first-contact-add-on/${name}.png">`)
    });
}

$(".order").click(function() {
    $('.order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".trigger").click(function(e) {
    if ($(this).is(':checked')) {
        $('.trigger').prop('checked', false);
        $(this).prop('checked', true);
    }
});

function sortByPower() {
    let creaturesByPowerBiggest = creatures.sort((a, b) => b.power - a.power);
    $(".card-container").empty();
    placeNewArray(creaturesByPowerBiggest);
};

function sortByReversePower() {
    let creaturesByPowerBiggest = creatures.sort((a, b) => a.power - b.power);
    $(".card-container").empty();
    placeNewArray(creaturesByPowerBiggest);
};

function sortByAlph() {
    let creaturesByAlph = creatures.sort(function(a, b) {
        return a === b ? 0 : a.name < b.name ? -1 : 1;
    });
    $(".card-container").empty();
    placeNewArray(creaturesByAlph);
};

function placeNewArray(array) {
    $(array).each(function() {
        let name = this.name;
        name = name.split(" ");
        if (name.length == 2) {
            name = name[0] + "_" + name[1];
        } else if (name.length == 3) {
            name = name[0] + "_" + name[1] + "_" + name[2];
        } else if (name.length == 4) {
            name = name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3];
        }
        if (this.pack == "First Contact") {
            $(".card-container").append(`<img class="card" src="./img/first-contact/${name}.png">`)
        } else if (this.pack == "First Contact: Add-On") {
            $(".card-container").append(`<img class="card" src="./img/first-contact-add-on/${name}.png">`)
        } else if (this.pack == "Beyond Evolution") {
            $(".card-container").append(`<img class="card" src="./img/beyond-evolution/${name}.png">`)
        }
    });
}

$(".filter-btn").click(function() {
    let array = creatures;
    let firstContact;
    let addOn;
    let alph;
    let power;
    let revPower;
    let poisonous;
    let hunter;
    let frenzy;
    let tough;
    let sneaky;
    let play;
    let attack;
    let defeated;
    if($('.first-contact').is(':checked')){
        firstContact = true;
    }
    if($('.add-on').is(':checked')){
        addOn = true;
    }
    if($('.poisonous').is(':checked')){
        poisonous = true;
    }
    if($('.hunter').is(':checked')){
        hunter = true;
    }
    if($('.frenzy').is(':checked')){
        frenzy = true;
    }
    if($('.tough').is(':checked')){
        tough = true;
    }
    if($('.sneaky').is(':checked')){
        sneaky = true;
    }
    if($('.alph').is(':checked')){
        alph = true;
    }
    if($('.power').is(':checked')){
        power = true;
    }
    if($('.rev-power').is(':checked')){
        revPower = true;
    }
    if($('.play').is(':checked')){
        play = true;
    }
    if($('.attack').is(':checked')){
        attack = true;
    }
    if($('.defeated').is(':checked')){
        defeated = true;
    }
    array = getPack(array, firstContact, addOn);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated)
    getOrder(array, alph, power, revPower);
})

function getPack(array, firstContact, addOn) {
    if (!firstContact) {
        array = array.filter(creature => creature.pack != "First Contact");
    }
    if (!addOn) {
        array = array.filter(creature => creature.pack != "First Contact: Add-On");
    }
    return array;
}

function getKeywords(array, poisonous, hunter, frenzy, tough, sneaky) {
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

function getTriggers(array, play, attack, defeated) {
    if (play) {
        array = array.filter(creature => creature.triggers.play == true);
    } else if (attack) {
        array = array.filter(creature => creature.triggers.attack == true);
    }
    else if (defeated) {
        array = array.filter(creature => creature.triggers.defeated == true);
    }
    return array;
}

function getOrder(array, alph, power, revPower) {
    if (alph) {
        array = array.sort(function(a, b) {
            return a === b ? 0 : a.name < b.name ? -1 : 1;
        });
    } else if (power) {
        array = array.sort((a, b) => b.power - a.power);
    } else if (revPower) {
        array = array.sort((a, b) => a.power - b.power);
    }
    $(".card-container").empty();
    placeNewArray(array);
}