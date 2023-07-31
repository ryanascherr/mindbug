const creatures = [
    {
        name: "Axolotl Healer",
        power: 4,
        ability: "Poisonous - Play: Gain 2 life points",
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
        ability: "Play: Take control of a creature with power 6 or more",
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
        ability: "Sneaky - Attack: The opponent loses a life point",
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
        ability: "Hunter - Play: Play a card from your discard pile",
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
        ability: "Poisonous - Play: The opponent cannot activate play effects",
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
        ability: "Tough - The opponent cannot block with creatures with power 4 or less",
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
        ability: "Frenzy - Defeated: Defeat a creature",
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
        ability: "Sneaky - Play: The opponent discards 2 cards",
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
        ability: "Play: Draw your entire discard pile",
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
        ability: "Hunter - Has +6 power while it is your turn",
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
        ability: "Tough - Play: Play a card from the opponent's discard pile",
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
        ability: "Defeated: Take control of up to 2 creatures with power 5 or less",
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
        ability: "Play: Defeat all enemy creatures with power 4 or less",
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
        ability: "Hunter - Play: The opponent loses a life point",
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
        ability: "Tough - While this is your only allied creature, it has +5 power and frenzy",
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
        ability: "Frenzy",
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
        ability: "Play: Set your life points equal to the opponent's",
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
        ability: "Tough Poisonous",
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
        ability: "Frenzy Tough",
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
        ability: "Hunter - Attack: Defeat an enemy creature with power 6 or more",
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
        ability: "Tough - Other allied creatures have +1 power",
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
        ability: "Attack: If you control fewer creatures than the opponent, defeat a creature",
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
        ability: "Poisonous - Other allied creatures with power 4 or less have hunter and poisonous",
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
        ability: "Sneaky Poisonous",
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
        ability: "Defeated: Steal 2 random cards from the opponent's hand",
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
        ability: "Sneaky - Play: Defeat an enemy creature with power 7 or more",
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
        ability: "Attack: The opponent loses all life points except one",
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
        ability: "Attack: The opponent discards a card",
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
        ability: "Hunter - Other allied creatures have +2 power while it is your turn",
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
        ability: "Tough - Has +8 power while you have 1 life point left",
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
        ability: "Attack: You lose 1 life point. Defeat a creature",
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
        ability: "Poisonous, Hunter",
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
        ability: "Hunter: Has +2 power for each other allied creature",
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
        ability: "Frenzy Hunter Tough - Play: You lose 1 life point",
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
        ability: "Frenzy - The enemy creature(s) with the lowest power can't attack",
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
        ability: "Sneaky - Play: The opponent gives you a card from their hand. Play it or put it into your hand",
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
        ability: "Frenzy - When you lose 1 or more life points while this is in your discard pile, you may play this",
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
        ability: "Poisonous - Attack: Defeat the creature(s) with the lowest power",
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
        ability: "Tough - Attack: If you control more creatures than the opponent, this has sneaky this turn",
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
        ability: "Attack: Choose a creature. It cannot block this turn",
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
        power: 6,
        ability: "Frenzy - Can only be blocked by creatures with power within 1 of this creature's power",
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
            defeated: false
        },
        evolved: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Ant Zombie Horde",
        power: 7,
        ability: "Tough - Attack: Boost 2 cards to this",
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
        ability: "Frenzy Tough - While your discard pile is empty, this has +4 power",
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
        ability: "Hunter - In Discard Pile: When the opponent loses life, they lose 2 additional life",
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
        ability: "Tough - In Discard Pile: Allied creatures have +1 power",
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
        ability: "Sneaky - In Discard Pile: Enemy creatures with power 7 or more cannot attack and/or block",
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
        ability: "Poisonous - Attack: The opponent discards their draw pile",
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
        ability: "Tough Sneaky - Cannot attack",
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
        ability: "Frenzy Tough - In Discard Pile: Allied creatures have -2 power (to a minimum of 1)",
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
        ability: "Hunter - Attack: You may defeat a creature with poisonous",
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
        power: 8,
        ability: "Defeated: The opponent loses 1 life. Boost 1 card to a creature",
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Ghostly Underdog",
        power: 4,
        ability: "Attack: Defeat all enemy creatures with power lower than this",
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
        ability: "Play/Attack: Boost 1 card to a creature or defeat a boosted creature",
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
        ability: "Frenzy Poisonous - Play: Boost 4 cards to 1 or more creatures",
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
        power: 1,
        ability: "Sneaky - While 2 or more creatures have equal power, they cannot attack",
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
        ability: "Poisonous - Play/Attack: Reveal a random card from the opponent's hand. Put it into any player's discard pile",
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
        ability: "Defeated: Choose a keyword. Defeat all enemy creatures with the chosen keyword",
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
        ability: "Sneaky - When this card is put into your discard pile from anywhere, gain 1 life",
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
            discard: false
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Porcupine Teacher",
        power: 5,
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
        name: "Pyro Salamancer",
        power: 6,
        ability: "Play: Boost 1 card to a creature. Defeat exactly 2 creatures with equal power",
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
        ability: "Poisonous - Attack: Defeat an enemy creature with power 7 or more",
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
        name: "Rockyphant",
        power: 8,
        ability: "Tough - When this card is put into your discard pile from anywhere, the opponent discards a card",
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
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Sea-Rex",
        ability: "Hunter - Attack: Boost 1 card to this",
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
        ability: "Tough - Play/Attack: Boost 1 card to a creature or return a boost card to your hand",
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
        power: 5,
        ability: "Hunter - Defeated: Take control of a creature with power 2 or less",
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Spirit Maki",
        power: 3,
        ability: "Sneaky - Defeated: Take control of a creature with power 9 or more",
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
        name: "Squirtoise Scout",
        power: 2,
        ability: "Tough - While 2 or more allied creatures have equal power, the opponent cannot block",
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
        name: "Tiger Wasp",
        power: 3,
        ability: "Frenzy Sneaky - Play: Discard a random card",
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
        ability: "Play: Discard up to 2 cards. For each card discarded this way, defeat a creature",
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
        name: "Trash Diver",
        power: 2,
        ability: "Sneaky - Attack: Draw any 2 cards from the opponent's discard pile",
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
        name: "Trash Flier",
        power: 2,
        ability: "Sneaky - Defeated: Play a card from the opponent's discard pile",
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
        name: "Water Antler",
        power: 8,
        ability: "Play: Gain 1 life. Boost 1 card to a creature",
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
        name: "Bigroot",
        power: 4,
        ability: "Action: Play a card from your discard pile. Evolve to Oakenmaster",
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
        name: "Blastfish",
        power: 1,
        ability: "Poisonous - Attack: This cannot be defeated this turn",
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
        ability: "Attack: Defeat an enemy creature with power 3 or less",
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
        ability: "Poisonous - Action: Choose an enemy creature. The opponent attacks with it if able",
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
        ability: "Frenzy - During the opponent's turn, they must always attack this with a creature with hunter if able",
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
        ability: "Hunter - Play: The opponent discards a card for each creature they control",
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
        ability: "Hunter - While there are 3 or more enemy creatures, this has +5 power",
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
        ability: "Hunter - Play: The opponent loses 1 life for each mindbug they have",
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
        ability: "Action: Defeat an enemy creature with power 4 or less. Evolve to Typhoon Princess",
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
        ability: "Poisonous - Action: Gain 1 life. Evolve to Frog Prophet",
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
        ability: "Play: You may lose 1 life. If you do, return all enemy creatures to the opponent's hand",
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
        ability: "Tough - Action: If you control fewer creatures than the opponent, they lose 1 life",
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
        ability: "Snaeky - Play: You may discard a card. If you do, defeat a creature",
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
        ability: "Poisoinous Tough - Action: Gain 1 life. Evolve to World Eater",
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
        name: "Frosty Fortress",
        power: 10,
        ability: "Tough - Attack: The opponent discards their hand and draw pile",
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
        name: "Infernostrich",
        power: 6,
        ability: "Action: Defeat an enemy creature with power 7 or more",
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
        ability: "Tough - The opponent cannot block with creatures with power 7 or more",
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
        ability: "Action: Defeat this. Take control of an enemy creature",
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
        ability: "Poisonous - Defeated: Defeat all enemy creatures with power 8 or more",
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
        ability: "Frenzy - Play: The opponent takes control of this. Defeated: Defeat all other allied creatures",
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
        ability: "Sneaky Tough",
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
        ability: "Tough - When this fights, the creature with the highest power is defeated instead of the lowest",
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
        ability: "Sneaky - When you have no Mindbugs, this has +5 power",
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
        ability: "Defeated: The opponent discards 3 cards",
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
        ability: "Defeated: Gain 2 life",
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
        name: "The Experiment",
        power: 6,
        ability: "Poisonous - Play: The opponent takes control of this. Take control of an enemy creature",
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
        ability: "Attack: Defeat an enemy creature",
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
        ability: "Tough - Play: Defeat up to 2 enemy creatures with power 4-6",
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
        ability: "Action: Defeat an enemy creature with power 6 or less. Evolve to Thunder Queen",
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
        name: "Utility Bug",
        power: 4,
        ability: "Hunter Tough - Play: You may copy the play effect of another creature",
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
        name: "Veteran Penguin",
        power: 5,
        ability: "Tough - Action: The opponent discards a card. Evolve to Frosty Fortress",
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
        ability: "Action: The opponent discards a card. Evolve to Veteran Penguin",
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
        name: "Westside Monster",
        power: 8,
        ability: "Frenzy - Enemy creatures with sneaky cannot attack and/or block",
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
        ability: "Action: Play a card from your discard pile. Evolve to Bigroot",
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
        ability: "Poisonous Tough - Attack: The opponent loses 1 life",
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
    // {
    //     name: "Blessed Axolotl",
    //     power: 6,
    //     ability: `Allied creatures have "Attack: Gain 1 life"`,
    //     double: false,
    //     keywords: {
    //         poisonous: true,
    //         frenzy: false,
    //         tough: false,
    //         sneaky: false,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false,
    //         discard: true
    //     },
    //     evolution: false,
    //     pack: "Promo"
    // },
    {
        name: "Boar-Zooka",
        power: 6,
        ability: "Cannot block. Defeated: Defeat all enemy creatures",
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
        pack: "Promo"
    },
    // {
    //     name: "Bug Catcher",
    //     power: 9,
    //     ability: "Players cannot use Mindbugs",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: true,
    //         tough: true,
    //         sneaky: false,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: false,
    //     pack: "Promo"
    // },
    {
        name: "Chuck",
        power: 3,
        ability: "Tough - Play: Roll a 6-sided die. On 4 to 6, defeat an enemy creature and then repeat this effect",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    // {
    //     name: "Cursed Werewolf",
    //     power: 8,
    //     ability: "Allied creatures with frenzy and/or hunter cannot attack",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: true,
    //         tough: false,
    //         sneaky: false,
    //         hunter: true
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false,
    //         discard: true
    //     },
    //     evolution: false,
    //     pack: "Promo"
    // },
    // {
    //     name: "Ghost Hand",
    //     power: 2,
    //     ability: "Name a creature. Creature(s) with the chosen name cannot block as long as this is in play",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: false,
    //         tough: false,
    //         sneaky: true,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: true,
    //         attack: false,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: false,
    //     pack: "Promo"
    // },
    {
        name: "Jazz Dog",
        power: 5,
        ability: "At the end of your turn, if an enemy creature blocked this turn and is still in play, take control of it",
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
        pack: "Promo"
    },
    // {
    //     name: "Kitten Crewmate",
    //     power: 2,
    //     ability: `When this would be defeated, evolve it to "One-Eye" Felix instead`,
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: false,
    //         tough: false,
    //         sneaky: true,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: true,
    //     pack: "Promo"
    // },
    {
        name: "Macaw Dagon",
        power: 8,
        ability: "Attack: Swap hands with the opponent",
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
        evolution: false,
        pack: "Promo"
    },
    {
        name: "Mindbug Bug",
        power: 7,
        ability: "Tough - When the opponent uses a Mindbug, they first lose 1 life point",
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
            action: false
        },
        evolution: false,
        pack: "Promo"
    },
    // {
    //     name: "One-Eye Felix",
    //     power: 7,
    //     ability: "When this defeats an enemy creature, evolve to Silver Whiskers",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: false,
    //         tough: false,
    //         sneaky: false,
    //         hunter: true
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: true,
    //     evolved: true,
    //     pack: "Promo"
    // },
    {
        name: "Ram Hopper",
        power: 7,
        ability: "Frenzy - Other allied creatures have frenzy",
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
        pack: "Promo"
    },
    {
        name: "Ratomancer",
        power: 2,
        ability: "Play: Play any number of cards with power 4 or less from your discard pile without activating their play effects",
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
        pack: "Promo"
    },
    // {
    //     name: "Silver Whiskers",
    //     power: 6,
    //     ability: "You may gain control of an enemy creature with power 5 or less",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: false,
    //         tough: true,
    //         sneaky: false,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: false,
    //         attack: true,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: true,
    //     evolved: true,
    //     pack: "Promo"
    // },
    {
        name: "Slugapult",
        power: 5,
        ability: "Tough Frenzy - Attack: You may defeat another allied creature. If you do, defeat an enemy creature",
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
        ability: "Tough Hunter Frenzy",
        double: false,
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
        ability: "Attack: If your hand is empty, you win the game",
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
        evolution: false,
        pack: "Promo"
    }
    // {
    //     name: "Watts Dog",
    //     power: 5,
    //     ability: "Cannot be blocked by creatures with 1 or more keywords",
    //     double: false,
    //     keywords: {
    //         poisonous: false,
    //         frenzy: true,
    //         tough: false,
    //         sneaky: false,
    //         hunter: false
    //     },
    //     triggers: {
    //         play: false,
    //         attack: false,
    //         defeated: false,
    //         action: false
    //     },
    //     evolution: false,
    //     pack: "Promo"
    // }
]

updateCriteria();

$(".order").click(function() {
    $('.order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".number").click(function() {
    if ($(this).hasClass("single")) {
        $('.double').prop('checked', false);
    } else {
        $('.single').prop('checked', false);
    }
})

$('select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');

    if($(relatedInput).is(':checked')){
        getPowerCriteria(power);
    }
});

$(".power-c").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');
    let power = parseInt($(select).val());

    if ($(input).is(':checked')) {
        $('.power-c').prop('checked', false);
        $(input).prop('checked', true);
        $('.power-select').prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }

    getPowerCriteria(power);
});

$(".pack").click(function(e) {
    if ($(".pack").is(':checked')) {
        getPackCriteria();
    } else {
        e.preventDefault();
    }
})

$(".criteria").click(function() {
    updateCriteria();
});

function updateCriteria() {
    getKeyWordCriteria();
    getTriggerCriteria();
    getOtherCriteria();
    getOrderCriteria();
    getPackCriteria();
}

function getKeyWordCriteria() {
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

function getTriggerCriteria() {
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

function getPackCriteria() {
    let firstContact = $('.first-contact').is(':checked');
    let addOn = $('.add-on').is(':checked');
    let eternity = $('.eternity').is(':checked');
    let evolution = $('.evolution').is(':checked');
    let promo = $('.promo').is(':checked');
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

function getOrderCriteria() {
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

function getPowerCriteria(power) {
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

$(".filter-btn").click(function() {
    let array = creatures;

    let [firstContact, addOn, eternity, evolution, promo] = checkSets();
    let [poisonous, hunter, frenzy, tough, sneaky] = checkKeywords();
    let [play, attack, defeated, action, discard] = checkTriggers();
    let [boost, evolved, single, double] = checkOther();
    let [atLeast, atMost, exactly, powerNumber] = checkPower();
    let [alph, power, revPower] = checkOrder();
    
    array = getPack(array, firstContact, addOn, eternity, evolution, promo);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, action, discard);
    array = getOther(array, boost, evolved, single, double);
    array = getPower(array, atLeast, atMost, exactly, powerNumber);
    array = getOrder(array, alph, power, revPower);

    prepareForCards(array);
    placeCards(array);
})

function checkSets() {
    let firstContact = $('.first-contact').is(':checked');
    let addOn = $('.add-on').is(':checked');
    let eternity = $('.eternity').is(':checked');
    let evolution = $('.evolution').is(':checked');
    let promo = $('.promo').is(':checked');

    return [firstContact, addOn, eternity, evolution, promo];
}

function checkKeywords() {
    let poisonous = $('.poisonous').is(':checked');
    let hunter = $('.hunter').is(':checked');
    let frenzy = $('.frenzy').is(':checked');
    let tough = $('.tough').is(':checked');
    let sneaky = $('.sneaky').is(':checked');

    return [poisonous, hunter, frenzy, tough, sneaky];
}

function checkTriggers() {
    let play = $('.play').is(':checked');
    let attack = $('.attack').is(':checked');
    let defeated = $('.defeated').is(':checked');
    let action = $('.action').is(':checked');
    let discard = $('.discard').is(':checked');

    return [play, attack, defeated, action, discard];
}

function checkOther() {
    let boost = $('.boost').is(':checked');
    let evolved = $('.evolved').is(':checked');
    let single = $('.single').is(':checked');
    let double = $('.double').is(':checked');

    return [boost, evolved, single, double];
}

function checkPower() {
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

function checkOrder() {
    let alph = $('.alph').is(':checked');
    let power = $('.power').is(':checked');
    let revPower = $('.rev-power').is(':checked');

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

function getOther(array, boost, evolved, single, double) {
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

function placeCards(array) {
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
                $(".card-container").append(`<img loading="lazy" class="card" src="./img/first-contact/${name}.jpg">`)
            } else if (this.pack == "First Contact: Add-On") {
                $(".card-container").append(`<img loading="lazy" class="card" src="./img/first-contact-add-on/${name}.jpg">`)
            } else if (this.pack == "Beyond Evolution") {
                $(".card-container").append(`<img loading="lazy" class="card" src="./img/beyond-evolution/${name}.jpg">`)
            } else if (this.pack == "Beyond Eternity") {
                $(".card-container").append(`<img loading="lazy" class="card" src="./img/beyond-eternity/${name}.jpg">`)
            } else if (this.pack == "Promo") {
                $(".card-container").append(`<img loading="lazy" class="card" src="./img/promo/${name}.jpg">`)
            }
        });
    } else {
        $(".card-container").append(`<div><h2 style="padding: 15px;">Sorry human, no results were found with your search criteria. Try again!</h2><div style="display: flex; justify-content: center;"><img style="max-width: 100%;" src="./img/wallpaper/mindbug.png"></div></div>`);
    }

    if (!$(".results").hasClass("d-none")) {
        scrollToResults();
    }
}

function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".results").offset().top
    });
}

// let creatureNames = [];
// $(creatures).each(function() {
//     creatureNames.push(this.name);
// })

$(".deal-hand").click(function() {
    dealHand();
})

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

let modal = $(".modal-content");

window.onclick = function(event) {
    let clickTarget = $(event.target);
    clickTarget = clickTarget[0];
    if ($(clickTarget).hasClass("modal-content")) {
        closeModal();
    }
};

$('body').on('click', '.card', function () {
    let src = $(this).attr('src');
    openModal(src);
});

$('body').on('click', '.modal-img, .modal span', function () {
    closeModal();
});

$('html').keyup(function(e){
    if(e.keyCode == 8 && $(".modal").hasClass("open")){
        closeModal();
    }
}) 

function openModal(src) {
    $(".modal").css("display","block");
    $(".modal").addClass("open");
    $(".modal img").attr("src",src);
}

function closeModal() {
    $(".modal").css("display","none");
    $(".modal img").attr("src","");
    $(".modal").removeClass("open");
}
