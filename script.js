let creatures = [
    {
        name: "Axolotl Healer",
        keywords: "Poisonous",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Bee Bear",
        keywords: "",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Brain Fly",
        keywords: "",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Chameleon Sniper",
        keywords: "Sneaky",
        triggers: "Attack",
        pack: "First Contact"
    },
    {
        name: "Compost Dragon",
        keywords: "Hunter",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Deathweaver",
        keywords: "Poisonous",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Elephantopus",
        keywords: "Tough",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Explosive Toad",
        keywords: "Frenzy",
        triggers: "Defeated",
        pack: "First Contact"
    },
    {
        name: "Ferret Bomber",
        keywords: "Sneaky",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Giraffodile",
        keywords: "",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Goblin Werewolf",
        keywords: "Hunter",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Gorillion",
        keywords: "",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Grave Robber",
        keywords: "Tough",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Harpy Mother",
        keywords: "",
        triggers: "Defeated",
        pack: "First Contact"
    },
    {
        name: "Kangasaurus Rex",
        keywords: "",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Killer Bee",
        keywords: "Hunter",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Lone Yeti",
        keywords: "Tough, Frenzy",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Luchataur",
        keywords: "Frenzy",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Mysterious Mermaid",
        keywords: "",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Plated Scorpion",
        keywords: "Tough, Poisonous",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Rhino Turtle",
        keywords: "Frenzy, Tough",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Shark Dog",
        keywords: "Hunter",
        triggers: "Attack",
        pack: "First Contact"
    },
    {
        name: "Sharky Crab-Dog-Mummypus",
        keywords: "Hunter, Sneaky, Frenzy, Poisonous",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Shield Bugs",
        keywords: "Tough",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Snail Hydra",
        keywords: "",
        triggers: "Attack",
        pack: "First Contact"
    },
    {
        name: "Snail Thrower",
        keywords: "Poisonous, Hunter",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Spider Owl",
        keywords: "Sneaky, Poisonous",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Strange Barrel",
        keywords: "Defeated",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Tiger Squirrel",
        keywords: "Sneaky",
        triggers: "Play",
        pack: "First Contact"
    },
    {
        name: "Turbo Bug",
        keywords: "",
        triggers: "Attack",
        pack: "First Contact"
    },
    {
        name: "Tusked Extorter",
        keywords: "",
        triggers: "Attack",
        pack: "First Contact"
    },
    {
        name: "Urchin Hurler",
        keywords: "Hunter",
        triggers: "",
        pack: "First Contact"
    },
    {
        name: "Bugserker",
        keywords: "Tough",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Count Draculeech",
        keywords: "",
        triggers: "Attack",
        pack: "First Contact: Add-On"
    },
    {
        name: "Creep from the Deep",
        keywords: "Poisonous, Hunter",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Ferret Pacifier",
        keywords: "",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Froblin Instigator",
        keywords: "Hunter",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Goreagle Alpha",
        keywords: "Frenzy, Hunter, Tough",
        triggers: "Play",
        pack: "First Contact: Add-On"
    },
    {
        name: "Hamster Lion",
        keywords: "Frenzy",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Hungry Hungry Hamster",
        keywords: "Sneaky",
        triggers: "Play",
        pack: "First Contact: Add-On"
    },
    {
        name: "Hyenix",
        keywords: "Frenzy",
        triggers: "",
        pack: "First Contact: Add-On"
    },
    {
        name: "Majestic Manticore",
        keywords: "Poisonous",
        triggers: "Attack",
        pack: "First Contact: Add-On"
    },
    {
        name: "The Lurker",
        keywords: "Tough, Sneaky",
        triggers: "Attack",
        pack: "First Contact: Add-On"
    },
    {
        name: "Turf the Surfer",
        keywords: "",
        triggers: "Attack",
        pack: "First Contact: Add-On"
    }
]

initialize();
function initialize() {
    placeFirstContact();
    placeFirstContactAddOn();
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

$(".card").mouseenter(function() {
    if ($(this).attr("data-keywords") != "") {
        let card = this;
        let keywords = $(this).attr("data-keywords");
        keywords = keywords.split(", ");
        showKeywords(card, keywords);
    }
})

function showKeywords(card, keywords) {
    if (keywords.includes("Poisonous")) {
        console.log("POISONOUS: In addition to normal combat resolution, this creature always defeats the enemy creature, even if its power value is less than the enemy's power value.")
    }
}