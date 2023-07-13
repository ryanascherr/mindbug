const creatures = [
    {
        name: "Axolotl Healer",
        power: 4,
        ability: "Gain 2 life points",
        double: true,
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
        ability: "Cannot be blocked by creatures with power 6 or less",
        double: false,
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
        ability: "Take control of a creature with power 6 or more",
        double: false,
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
        ability: "The opponent loses a life point",
        double: false,
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
        ability: "Play a card from your discard pile",
        double: true,
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
        ability: "The opponent cannot activate play effects",
        double: false,
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
        ability: "The opponent cannot block with creatures with power 4 or less",
        double: false,
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
        ability: "Defeat a creature",
        double: true,
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
        ability: "The opponent discards 2 cards",
        double: true,
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
        ability: "Draw your entire discard pile",
        double: false,
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
        ability: "Has +6 power while it is your turn",
        double: true,
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
        double: false,
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
        ability: "Play a card from the opponent's discard pile",
        double: true,
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
        ability: "Take control of up to 2 creatures with power 5 or less",
        double: false,
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
        ability: "Defeat all enemy creatures with power 4 or less",
        double: true,
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
        ability: "The opponent loses a life point",
        double: true,
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
        ability: "While this is your only allied creature, it has +5 power and frenzy",
        double: false,
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
        double: true,
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
        ability: "Set your life points equal to the opponent's",
        double: false,
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
        double: true,
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
        double: true,
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
        ability: "Defeat an enemy creature with power 6 or more",
        double: false,
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
        ability: "Has hunter while an enemy creature does. Repeat for sneaky, frenzy, and poisonous",
        double: false,
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
        ability: "Other allied creatures have +1 power",
        double: true,
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
        ability: "If you control fewer creatures than the opponent, defeat a creature",
        double: true,
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
        ability: "Other allied creatures with power 4 or less have hunter and poisonous",
        double: false,
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
        double: true,
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
        ability: "Steal 2 random cards from the opponent's hand",
        double: false,
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
        ability: "Defeat an enemy creature with power 7 or more",
        double: true,
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
        ability: "The opponent loses all life points except one",
        double: false,
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
        ability: "The opponent discards a card",
        double: true,
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
        ability: "Other allied creatures have +2 power while it is your turn",
        double: false,
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
        ability: "Has +8 power while you have 1 life point left",
        double: true,
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
        ability: "You lose 1 life point. Defeat a creature",
        double: true,
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
        name: "Creep From The Deep",
        power: 4,
        double: true,
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
        ability: "The enemy creature(s) with the highest power can't block",
        double: true,
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
        ability: "Has +2 power for each other allied creature",
        double: true,
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
        ability: "You lose 1 life point",
        double: true,
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
        ability: "The enemy creature(s) with the lowest power can't attack",
        double: true,
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
        ability: "The opponent gives you a card from their hand. Play it or put it into your hand",
        double: true,
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
        ability: "When you lose 1 or more life points while this is in your discard pile, you may play this",
        double: true,
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
        ability: "Defeat the creature(s) with the lowest power",
        double: true,
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
        ability: "If you control more creatures than the opponent, this has sneaky this turn",
        double: true,
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
        name: "Turf The Surfer",
        power: 8,
        ability: "Choose a creature. It cannot block this turn",
        double: true,
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
        name: "Agile Rooster",
        power: 5,
        ability: "Can only be blocked by creatures with power within 1 of this creature's power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Ant Zombie Horde",
        power: 7,
        ability: "Boost 2 to this",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        pack: "Beyond Eternity"
    },
    {
        name: "Berserker Rabbit",
        power: 6,
        ability: "While your discard pile is empty, this has +3 power",
        double: true,
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
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Killer Bee",
        power: 5,
        ability: "When the opponent loses life, they lose 2 additional life",
        double: false,
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
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Shield Bugs",
        power: 6,
        ability: "Allied creatures have +1 power",
        double: false,
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
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Tiger Squirrel",
        power: 3,
        ability: "Enemy creatures with power 7 or more cannot attack and/or block",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Catalisk",
        power: 2,
        ability: "The opponent discards their draw pile",
        double: false,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Cave Lizard",
        power: 10,
        ability: "Cannot attack",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Cursed Gorillion",
        power: 10,
        ability: "Allied creatures have -2 power (to a minimum of 1)",
        double: false,
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
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Duckdra",
        power: 5,
        ability: "You may defeat a creature with poisonous",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Fire Antler",
        power: 9,
        ability: "The opponent loses 1 life",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Ghostly Underdog",
        power: 4,
        ability: "Defeat all enemy creatures with less power than this",
        double: false,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Goat Dragon",
        power: 7,
        ability: "Boost 1 to any creature. You may defeat a boosted creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Hiss Holiness",
        power: 5,
        ability: "Boost 4 to any creature(s)",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Hypnotic Mouse",
        double: false,
        ability: "While 2 or more creatures have equal power, they cannot attack",
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
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Koibra",
        power: 2,
        ability: "Reveal a random card from the opponent's hand. Put it into any player's discard pile",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Madam Mystique",
        power: 2,
        ability: "Choose a keyword. Defeat all enemy creatures with the chosen keyword",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Peacasus",
        power: 3,
        ability: "When this card is put into your discard pile from anywhere, gain 1 life",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Pyro Salamancer",
        power: 6,
        ability: "Boost 1 to any creature. Defeat exactly 2 creatures with equal power",
        double: true,
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
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Radioactive Pest",
        power: 1,
        ability: "Defeat an enemy creature with power 7 or more",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Rockswapper",
        power: 8,
        ability: "You may swap discard pile with the opponent",
        double: false,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Sea-Rex",
        ability: "Boost 1 to this",
        power: 5,
        double: true,
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
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Soul Manipulator",
        power: 5,
        ability: "Boost 1 to any creature or return a boost card to your hand",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Spirit Cheetah",
        power: 6,
        ability: "Boost this to any creature",
        double: false,
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
            defeated: true
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Spirit Maki",
        power: 3,
        ability: "Boost this to any creature",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Squirtoise Scout",
        power: 2,
        ability: "While 2 or more allied creatures have equal power, the opponent cannot block",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tailbeak",
        power: 2,
        ability: "Play a card from the opponent's discard pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tiger Wasp",
        power: 3,
        ability: "Discard a random card",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tornado Dragon",
        power: 8,
        ability: "Discard up to 2 cards. For each card discarded this way, defeat an enemy creature",
        double: true,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Urchin Teacher",
        power: 4,
        ability: "Other allied creatures have poisonous",
        double: false,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Water Antler",
        power: 9,
        ability: "Gain 1 life. Boost 1 to any creature",
        double: true,
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
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Wingsnout",
        power: 2,
        ability: "Draw 2 cards from the opponent's discard pile",
        double: false,
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Bigroot",
        power: 4,
        ability: "Play a card from your discard pile. Evolve to Oakenmaster",
        double: false,
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
            defeated: false,
            action: true
        },
        evolved: false,
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Blastfish",
        power: 1,
        ability: "This cannot be defeated this turn",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Bullet Train",
        power: 9,
        ability: "Defeat an enemy creature with power 3 or less",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Cake Trickster",
        power: 6,
        ability: "Choose an enemy creature. The opponent attacks with it if able",
        double: true,
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
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Captain Hippo",
        power: 7,
        ability: "During the opponent's turn, they must always attack this with a creature with hunter if able",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Cheeky Chimpborg",
        power: 5,
        ability: "The opponent discards a card for each creature they control",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Cheery Chimpborg",
        power: 5,
        ability: "While there are 3 or more enemy creatures, this has +5 power",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Chuckling Chimpborg",
        power: 5,
        ability: "The opponent loses 1 life for each mindbug they have",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Cloud Lady",
        power: 4,
        ability: "Defeat an enemy creature with power 4 or less. Evolve to Typhoon Princess",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Coach Panda",
        power: 6,
        ability: "While there is exactly 1 other allied creature, that creature has +3 power and frenzy",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Curious Tadpole",
        power: 1,
        ability: "Gain 1 life. Evolve to Frog Prophet",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Dr Orange U Tan",
        power: 6,
        ability: "You may lose 1 life. If you do, return all enemy creatures to the opponent's hand",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Dragon Inn",
        power: 3,
        ability: "If you control fewer creatures than the opponent, they lose 1 life",
        double: true,
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
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Earwig Assassin",
        power: 1,
        ability: "You may discard a card. If you do, defeat a creature",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Frog Prophet",
        power: 3,
        ability: "Gain 1 life. Evolve to World Eater",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Infernostrich",
        power: 6,
        ability: "Defeat an enemy creature with power 7 or more",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Kitsunsei",
        power: 4,
        ability: "Other allied creatures have sneaky",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Mole Machine",
        power: 5,
        ability: "The opponent cannot block with creatures with power 7 or more",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Oakenmaster",
        power: 7,
        ability: "Other allied creatures have +5 power",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Octocopter",
        power: 5,
        ability: "Defeat this. Take control of an enemy creature",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Puffermech",
        power: 2,
        ability: "Defeat all enemy creatures with power 8 or more",
        double: true,
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
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Radioactive Rabbit",
        power: 3,
        ability: "The opponent takes control of this. Defeat all other allied creatures",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Robopup",
        power: 1,
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Sawn",
        power: 5,
        ability: "When this fights, the creature with the highest power is defeated instead of the lowest",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Spiky Shinobi",
        power: 3,
        ability: "When you have no Mindbugs, this has +5 power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Steelhorn",
        power: 7,
        ability: "The opponent discards 3 cards",
        double: false,
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
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Sweet Fighter",
        power: 9,
        ability: "Gain 2 life",
        double: true,
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
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Swiss Army Bug",
        power: 4,
        ability: "You may copy the play effect of another creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "The Experiment",
        power: 6,
        ability: "The opponent takes control of this. Take control of an enemy creature",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Thunder Queen",
        power: 9,
        ability: "Defeat an enemy creature",
        double: false,
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
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Turtle Toaster",
        power: 4,
        ability: "Defeat up to 2 enemy creatures with power 4-6",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Typhoon Princess",
        power: 6,
        ability: "Defeat an enemy creature with power 6 or less. Evolve to Thunder Queen",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Veteran Penguin",
        power: 5,
        ability: "The opponent discards a card. Evolve to War Machine",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Waddling Recruit",
        power: 3,
        ability: "The opponent discards a card. Evolve to Veteran Penguin",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        pack: "Beyond Evolution"
    },
    {
        name: "War Machine",
        power: 10,
        ability: "The opponent discards their hand and draw pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Westside Monster",
        power: 8,
        ability: "Enemy creatures with sneaky cannot attack and/or block",
        double: true,
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Wildsprout",
        power: 1,
        ability: "Play a card from your discard pile. Evolve to Bigroot",
        double: false,
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
            defeated: false,
            action: true
        },
        evolution: true,
        pack: "Beyond Evolution"
    },
    {
        name: "World Eater",
        power: 8,
        ability: "The opponent loses 1 life",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Boar-Zooka",
        power: 6,
        ability: "Cannot block. Defeat all enemy creatures",
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
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Chuck",
        power: 3,
        ability: "Roll a 6-sided die. On 4 to 6 defeat an enemy creature and then repeat this effect",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Jazz Dog",
        power: 5,
        ability: "At the end of your turn, if an enemy creature blocked this turn and is still in play, take control of it",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Macaw Dagon",
        power: 8,
        ability: "Swap hands with the opponent",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Mindbug Bug",
        power: 7,
        ability: "When the opponent uses a Mindbug, they first lose 1 life point",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Ram Hopper",
        power: 7,
        ability: "Other allied creatures have frenzy",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Ratomancer",
        power: 2,
        ability: "Play any number of cards with power 4 or less from your discard pile without activating their play effects",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Slugapult",
        power: 5,
        ability: "You may defeat another allied creature. If you do, defeat an enemy creature",
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Sluggernaut",
        power: 6,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Unigon",
        power: 9,
        ability: "If your hand is empty, you win the game",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Blessed Axolotl",
        power: 6,
        ability: `Allied creatures have "Attack: Gain 1 life"`,
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
            defeated: false,
            action: false,
            discard: true
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Bug Catcher",
        power: 9,
        ability: "Players cannot use Mindbugs",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Cursed Werewolf",
        power: 8,
        ability: "Allied creatures with frenzy and/or hunter cannot attack",
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false,
            discard: true
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Ghost Hand",
        power: 2,
        ability: "Name a creature. Creature(s) with the chosen name cannot block as long as this is in play",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Kitten Crewmate",
        power: 2,
        ability: `When this would be defeated, evolve it to "One-Eye" Felix instead`,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: true,
        pack: "Promo"
    },
    {
        name: "One-Eye Felix",
        power: 7,
        ability: "When this defeats an enemy creature, evolve to Silver Whiskers",
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
            defeated: false,
            action: false
        },
        evolution: true,
        pack: "Promo"
    },
    {
        name: "Silver Whiskers",
        power: 6,
        ability: "You may gain control of an enemy creature with power 5 or less",
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        pack: "Promo"
    },
    {
        name: "Watts Dog",
        power: 5,
        ability: "Cannot be blocked by creatures with 1 or more keywords",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    }
]

let cardsOut = false;
let isStacked = false;
let animationDuration = 3000;

initialize();
function initialize() {
    let pageLoad = true;
    getOrderCriteria(pageLoad);
    getPackCriteria(pageLoad);
}

$(".order").click(function() {
    $('.order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".live").click(function() {
    $('.live').prop('checked', false);
    $(this).prop('checked', true);
});

$('select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');
    if($(relatedInput).is(':checked')){
        getPowerCriteria(power);
    }
});

$(".power-c").click(function(e) {
    let parent;
    let numberChecked = 0;
    if ($(".power-at-least").is(':checked')) {
        $('.select-power-at-least').prop('disabled', false);
        parent = $(".power-at-least").parent();
        numberChecked++;
    } 
    if ($(".power-at-most").is(':checked')) {
        $('.select-power-at-most').prop('disabled', false);
        parent = $(".power-at-most").parent();
        numberChecked++;
    }
    if ($(".power-exactly").is(':checked')) {
        $('.select-power-exactly').prop('disabled', false);
        parent = $(".power-exactly").parent();
        numberChecked++;
    }
    if (numberChecked > 1) {
        $('.power-c').prop('checked', false);
        $(this).prop('checked', true);
    }

    if (!$(".power-at-least").is(':checked')) {
        $('.select-power-at-least').prop('disabled', true);
    }
    if (!$(".power-at-most").is(':checked')) {
        $('.select-power-at-most').prop('disabled', true);
    }
    if (!$(".power-exactly").is(':checked')) {
        $('.select-power-exactly').prop('disabled', true);
    }

    let select = $(parent).children('select');
    let power = parseInt($(select).val());
    getPowerCriteria(power);
});

$(".pack").click(function(e) {
    let numberChecked = 0;
    if ($(".first-contact").is(':checked')) {
        numberChecked++;
    }
    if ($(".add-on").is(':checked')) {
        numberChecked++;
    }
    if ($(".eternity").is(':checked')) {
        numberChecked++;
    }
    if ($(".evolution").is(':checked')) {
        numberChecked++;
    }
    if ($(".promo").is(':checked')) {
        numberChecked++;
    }
    if (numberChecked == 0) {
        e.preventDefault();
    } else {
        getPackCriteria();
    }
})

$(".criteria").click(function() {
    updateCriteria();
});

function updateCriteria(pageLoad) {
    getKeyWordCriteria(pageLoad);
    getTriggerCriteria(pageLoad);
    getOtherCriteria(pageLoad);
    getOrderCriteria(pageLoad);
}

function getKeyWordCriteria() {
    let poisonous;
    let hunter;
    let frenzy;
    let tough;
    let sneaky;
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

function getTriggerCriteria() {
    let play;
    let attack;
    let defeated;
    let action;
    let discard;
    if($('.play').is(':checked')){
        play = true;
    }
    if($('.attack').is(':checked')){
        attack = true;
    }
    if($('.defeated').is(':checked')){
        defeated = true;
    }
    if($('.action').is(':checked')){
        action = true;
    }
    if($('.discard').is(':checked')){
        discard = true;
    }
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

function getPackCriteria() {
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
    let promo;
    if($('.first-contact').is(':checked')){
        firstContact = true;
    }
    if($('.add-on').is(':checked')){
        addOn = true;
    }
    if($('.eternity').is(':checked')){
        eternity = true;
    }
    if($('.evolution').is(':checked')){
        evolution = true;
    }
    if($('.promo').is(':checked')){
        promo = true;
    }
    let message = "";
    let notTheFirst = false;
    if (firstContact && addOn && eternity && evolution && promo) {
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
            message += " & First Contact: Add On";
        } else {
            message += "First Contact: Add On"
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
    if (promo) {
        if (notTheFirst) {
            message += " & Promo";
        } else {
            message += "Promo"
        }
        notTheFirst = true;
    }
    $(".criteria-packs").text(message);
}

function getOtherCriteria() {
    let boost;
    let evolved;
    if($('.boost').is(':checked')){
        boost = true;
    }
    if($('.evolved').is(':checked')){
        evolved = true;
    }
    let message = "";
    let notTheFirst = false;
    if (!boost && !evolved) {
        message = "";
        $(".criteria-others").text(message);
        return;
    }
    if (boost) {
        message += "that interact with Boost";
        notTheFirst = true;
    }
    if (evolved) {
        if (notTheFirst) {
            message += " & Evolution";
        } else {
            message += "that interact with Evolution"
        }
    }
    $(".criteria-others").text(message);
}

function getOrderCriteria() {
    let alph;
    let power;
    let revPower;
    if($('.alph').is(':checked')){
        alph = true;
    } else if ($('.power').is(':checked')){
        power = true;
    } else if($('.rev-power').is(':checked')){
        revPower = true;
    }
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

function getPowerCriteria(power) {
    let atLeast;
    let atMost;
    let exactly;
    if ($('.power-at-least').is(':checked')){
        atLeast = true;
    } else if ($('.power-at-most').is(':checked')){
        atMost = true;
    } else if($('.power-exactly').is(':checked')){
        exactly = true;
    }
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

$(".filter-btn").click(function() {
    let array = creatures;

    let [firstContact, addOn, eternity, evolution, promo] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky] = checkKeywords();
    let [play, attack, defeated, action, discard] = checkTriggers();
    let [boost, evolved] = checkOther();
    let [atLeast, atMost, exactly, powerNumber] = checkPower();
    let [alph, power, revPower] = checkOrder();
    
    array = getPack(array, firstContact, addOn, eternity, evolution, promo);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, action, discard);
    array = getOther(array, boost, evolved);
    array = getPower(array, atLeast, atMost, exactly, powerNumber);
    array = getOrder(array, alph, power, revPower);

    prepareForCards(array);
    placeCards(array);
})

function checkSets() {
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
    let promo;
    if($('.first-contact').is(':checked')){
        firstContact = true;
    }
    if($('.add-on').is(':checked')){
        addOn = true;
    }
    if($('.eternity').is(':checked')){
        eternity = true;
    }
    if($('.evolution').is(':checked')){
        evolution = true;
    }
    if($('.promo').is(':checked')){
        promo = true;
    }
    return [firstContact, addOn, eternity, evolution, promo];
}

function checkKeywords() {
    let poisonous;
    let hunter;
    let frenzy;
    let tough;
    let sneaky;
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
    return [poisonous, hunter, frenzy, tough, sneaky];
}

function checkTriggers() {
    let play;
    let attack;
    let defeated;
    let action;
    let discard;
    if($('.play').is(':checked')){
        play = true;
    }
    if($('.attack').is(':checked')){
        attack = true;
    }
    if($('.defeated').is(':checked')){
        defeated = true;
    }
    if($('.action').is(':checked')){
        action = true;
    }
    if($('.discard').is(':checked')){
        discard = true;
    }
    return [play, attack, defeated, action, discard];
}

function checkOther() {
    let boost;
    let evolved;
    if($('.boost').is(':checked')){
        boost = true;
    }
    if($('.evolved').is(':checked')){
        evolved = true;
    }
    return [boost, evolved];
}

function checkPower() {
    let atLeast;
    let atMost;
    let exactly;
    let parent;
    if($('.power-at-least').is(':checked')){
        atLeast = true;
        parent = $('.power-at-least').parent();
    } else if($('.power-at-most').is(':checked')){
        atMost = true;
        parent = $('.power-at-most').parent();
    } else if($('.power-exactly').is(':checked')){
        exactly = true;
        parent = $('.power-exactly').parent();
    }
    let select = $(parent).children('select');
    let powerNumber = parseInt($(select).val());
    return [atLeast, atMost, exactly, powerNumber];
}

function checkOrder() {
    let alph;
    let power;
    let revPower;
    if($('.alph').is(':checked')){
        alph = true;
    }
    if($('.power').is(':checked')){
        power = true;
    }
    if($('.rev-power').is(':checked')){
        revPower = true;
    }
    return [alph, power, revPower];
}

function getPack(array, firstContact, addOn, eternity, evolution, promo) {
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
    if (!promo) {
        array = array.filter(creature => creature.pack != "Promo");
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

function getTriggers(array, play, attack, defeated, action, discard) {
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

function getOther(array, boost, evolved) {
    if (boost) {
        array = array.filter(creature => creature.boost == true);
    }
    if (evolved) {
        array = array.filter(creature => creature.evolution == true);
    }
    return array;
}

function getPower(array, atLeast, atMost, exactly, powerNumber) {
    if (atLeast) {
        array = array.filter(creature => creature.power >= powerNumber);
    } else if (atMost) {
        array = array.filter(creature => creature.power <= powerNumber);
    } else if (exactly) {
        array = array.filter(creature => creature.power == powerNumber);
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
    return array;
}

function prepareForCards(array) {
    $(".card-container").empty();
    $(".results").text(`- ${array.length} results found -`);
}

function placeCards(array, pageLoad) {
    if (array.length > 0) {
        $(array).each(function() {
            let name = this.name;
            if (name == "") return;
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
            } else if (this.pack == "Beyond Eternity") {
                $(".card-container").append(`<img class="card" src="./img/beyond-eternity/${name}.jpg">`)
            } else if (this.pack == "Promo") {
                $(".card-container").append(`<img class="card" src="./img/promo/${name}.png">`)
            }
        });
        // if (isStacked) {
        //     stackCards();
        // }
        // if ($(window).width() <= 400) {
        //     $(".stack-container-parent").removeClass("d-none");
        // }
    } else {
        $(".card-container").append(`<div><h2 style="padding: 15px;">Sorry human, no results were found with your search criteria. Try again!</h2><div style="display: flex; justify-content: center;"><img style="max-width: 100%;" src="./img/wallpaper/mindbug.png"></div></div>`);
    }
    if (pageLoad == true) return;
    if (!$(".results").hasClass("d-none")) {
        scrollToResults();
    } else if (!$(".deal-hand-container").hasClass("d-none")) {
        $('html, body').animate({
            scrollTop: $(".test").offset().top
        });
    } else if (!$(".auto-fill-parent-container").hasClass("d-none")) {
        $('html, body').animate({
            scrollTop: $(".auto-fill-container").offset().top
        });
    }
}

// $(".stack").click(function() {
//     if($('#stack-yes').is(':checked')) {
//         stackCards();
//     } else {
//         unstackCards();
//     }
//     scrollToResults();
// })

function stackCards() {
    let allCards = $(".card");
    let fromTop = 0;
    $(allCards).each(function() {
        $(this).css({"position":"absolute", "top":`${fromTop}px`});
        fromTop += 80;
    })
    isStacked = true;
}

function unstackCards() {
    let allCards = $(".card");
    $(allCards).each(function() {
        $(this).css({"position":"relative", "top":`0`});
    })
    isStacked = false;
}

// $(window).on('resize', function(){
//     if ($(window).width() <= 400) {
//         $(".stack-container-parent").removeClass("d-none");
//         if($('#stack-yes').is(':checked')) {
//             stackCards();
//         }
//     } else {
//         $(".stack-container-parent").addClass("d-none");
//         unstackCards();
//     }
// });

function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".results").offset().top
    });
}

let creatureNames = [];
$(creatures).each(function() {
    creatureNames.push(this.name);
})

// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//           /*check if the item starts with the same letters as the text field value:*/
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             /*create a DIV element for each matching element:*/
//             b = document.createElement("DIV");
//             /*make the matching letters bold:*/
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
//             /*insert a input field that will hold the current array item's value:*/
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//             /*execute a function when someone clicks on the item value (DIV element):*/
//             b.addEventListener("click", function(e) {
//                 /*insert the value for the autocomplete text field:*/
//                 inp.value = this.getElementsByTagName("input")[0].value;
//                 /*close the list of autocompleted values,
//                 (or any other open lists of autocompleted values:*/
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//           /*If the arrow DOWN key is pressed,
//           increase the currentFocus variable:*/
//           currentFocus++;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 38) { //up
//           /*If the arrow UP key is pressed,
//           decrease the currentFocus variable:*/
//           currentFocus--;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 13) {
//           /*If the ENTER key is pressed, prevent the form from being submitted,*/
//           e.preventDefault();
//           if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
//       /*a function to classify an item as "active":*/
//       if (!x) return false;
//       /*start by removing the "active" class on all items:*/
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       /*add class "autocomplete-active":*/
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       /*a function to remove the "active" class from all autocomplete items:*/
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       /*close all autocomplete lists in the document,
//       except the one passed as an argument:*/
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
// }

// autocomplete(document.getElementById("myInput"), creatureNames);

// $(".auto-fill-submit").click(function() {
//     let lonelyArray = []
//     let cardName = $("#myInput").val();
//     $(creatures).each(function() {
//         if (this.name == cardName) {
//             lonelyArray.push(this);
//             return;
//         }
//     })
//     prepareForCards(lonelyArray);
//     placeCards(lonelyArray);
// })

$(".flip-switch").click(function() {
    switchModes();
})

function switchModes() {
    $(".auto-fill-container").toggle("slow");
    $(".filter").toggle("slow");
    if ($(".flip-switch").hasClass("name")) {
        $(".auto-fill-container").removeClass("d-none");
        $(".auto-fill-container").css({"display":"flex", "flex-direction":"column", "justify-content":"center", "align-items":"center"})
        $(".flip-switch").text("Want to search using parameters instead?");
        $(".flip-switch").removeClass("name");
        $(".flip-switch").addClass("parameters");
        $(".criteria").addClass("d-none");
        $(".filter-btn-container").addClass("d-none");
        $(".instructions").text(`Enter a creature name below, then click "Submit" to see your result!`)
    } else {
        $(".flip-switch").text("Want to search by name instead?");
        $(".flip-switch").removeClass("parameters");
        $(".flip-switch").addClass("name");
        $(".criteria").removeClass("d-none");
        $(".filter-btn-container").removeClass("d-none");
        $(".instructions").text(`Select your search criteria below, then click "Search with Filters" to see your results!`)
    }
}

$(".deal-hand").click(function() {
    dealHand();
})

//todo factor in cards that have doubles
function dealHand() {
    let array = creatures;
    let [firstContact, addOn, eternity, evolution, promo] = checkSets2();
    array = getPack(array, firstContact, addOn, eternity, evolution, promo);
    let handOfCards = [];
    let usedNumbersArray = [];
    addCardToHand();
    function addCardToHand() {
        let randomNumber = Math.floor(Math.random()*(array.length));
        let howMany = 0;
        $(usedNumbersArray).each(function() {
            if (this == randomNumber) {
                howMany++;
            }
        })
        if (array[randomNumber].evolved == true) {
            addCardToHand();
            return;
        }
        if (howMany == 0) {
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        } else if (howMany == 1) {
            if (!array[randomNumber].double) {
            } else {
                usedNumbersArray.push(randomNumber);
                handOfCards.push(array[randomNumber]);
            }
        } else if (howMany == 2) {
        }
        
        if (handOfCards.length >= 5) {
            prepareForCards(handOfCards);
            placeCards(handOfCards);
        } else {
            addCardToHand();
        }
    }

}

$(".open").click(function(e) {
    e.preventDefault();
    $(".card-container").empty();
    $(".results").text(``);
    if ($(this).hasClass("open-filter")) {
        highlightTab(this);
        openFilter();
    } else if ($(this).hasClass("open-name")) {
        highlightTab(this);
        openName();
    } else if ($(this).hasClass("open-hand")) {
        highlightTab(this);
        openHand();
    }
})

function highlightTab(tab) {
    $(".open").removeClass("gray");
    $(".open").addClass("dark-gray");
    $(tab).removeClass("dark-gray")
    $(tab).addClass("gray")
}

function openFilter() {
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".filter-container").removeClass("d-none");
    $(".results").removeClass("d-none");
}

function openName() {
    $(".filter-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".auto-fill-parent-container").removeClass("d-none");
    $(".results").addClass("d-none");
}

function openHand() {
    $(".filter-container").addClass("d-none");
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").removeClass("d-none");
    $(".results").addClass("d-none");
}

$(".pack2").click(function(e) {
    let numberChecked = 0;
    if ($(".first-contact2").is(':checked')) {
        numberChecked++;
    }
    if ($(".add-on2").is(':checked')) {
        numberChecked++;
    }
    if ($(".eternity2").is(':checked')) {
        numberChecked++;
    }
    if ($(".evolution2").is(':checked')) {
        numberChecked++;
    }
    if ($(".promo2").is(':checked')) {
        numberChecked++;
    }
    if (numberChecked == 0) {
        e.preventDefault();
    } else {
        getPackCriteria();
    }
})

function checkSets2() {
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
    let promo;
    if($('.first-contact2').is(':checked')){
        firstContact = true;
    }
    if($('.add-on2').is(':checked')){
        addOn = true;
    }
    if($('.eternity2').is(':checked')){
        eternity = true;
    }
    if($('.evolution2').is(':checked')){
        evolution = true;
    }
    if($('.promo2').is(':checked')){
        promo = true;
    }
    return [firstContact, addOn, eternity, evolution, promo];
}

$("#myInput").keyup(function(event) {
    let inputVal = $("#myInput").val();
    inputVal = inputVal.toLowerCase();
    liveSearch(inputVal);
 });

 function liveSearch(inputVal) {
    let array = [];
    $(creatures).each(function() {
        let creature = this;
        let name = creature.name.toLowerCase();
        let ability;
        if (creature.ability) {
            ability = creature.ability.toLowerCase()
        } else {
            ability = "";
        }
        if (ability.includes(inputVal) || name.includes(inputVal)) {
            array.push(this);
        }
    })
    prepareForCards(array);
    placeCards(array);
 }
