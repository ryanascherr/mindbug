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
        ability: "Poisonous - The opponent cannot activate play effects",
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
        ability: "Action: Defeat an enemy creature with power 4 or less. Evolve to Typhoon Princess - Thunder Queen",
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
        secondEvolution: "Typhoon Princess",
        thirdEvolution: "Thunder Queen",
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
        ability: "Poisonous - Action: Gain 1 life. Evolve to Frog Prophet - World Eater",
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
        secondEvolution: "Frog Prophet",
        thirdEvolution: "World Eater",
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
        name: "Waddling Recruit",
        power: 3,
        ability: "Action: The opponent discards a card. Evolve to Veteran Penguin - Frosty Fortress",
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
        secondEvolution: 'Veteran Penguin',
        thirdEvolution: 'Frosty Fortress',
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
        ability: "Action: Play a card from your discard pile. Evolve to Bigroot - Oakenmaster",
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
        secondEvolution: 'Bigroot',
        thirdEvolution: 'Oakenmaster',
        pack: "Beyond Evolution"
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
        pack: "Promo 2022"
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
        pack: "Promo 2022"
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
        pack: "Promo 2022"
    },
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
        pack: "Promo 2022"
    },
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
        pack: "Promo 2022"
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
        pack: "Promo 2022"
    },
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
        pack: "Promo 2022"
    },
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
        pack: "Promo 2022"
    },
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
        pack: "Promo 2022"
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
        pack: "Promo 2022"
    },
    {
        name: "Suspicious Gift",
        power: 1,
        ability: "Play: The opponent takes control of this. Defeated: You lose 2 life",
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
            attack: true,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Future Eric",
        power: 3,
        ability: "Sneaky - Play: Put 2 random cards from outside the game on the bottom of your draw pile without looking at them",
        double: false,
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
            action: false,
            discard: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Alien Brain",
        power: 3,
        ability: `Poisonous - The opponent cannot put cards into their hand`,
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
            action: false,
            discard: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Watts Dog",
        power: 5,
        ability: "Frenzy - Cannot be blocked by creatures with 1 or more keywords",
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
        pack: "Promo 2023"
    },
    {
        name: "Blessed Axolotl Healer",
        power: 6,
        ability: `Poisonous - In Discard Pile: Allied creatures have "Attack: Gain 1 life"`,
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
            action: false,
            discard: true
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Cursed Goblin Werewolf",
        power: 8,
        ability: "Frenzy Hunter - In Discard Pile: Allied creatures with frenzy and/or hunter cannot attack",
        double: false,
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
        pack: "Promo 2023"
    },
    {
        name: "Kitten Crewmate",
        power: 2,
        ability: `Sneaky - If this would be defeated, evolve to "One-Eye" Felix instead - Silver Whiskers`,
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
            action: false
        },
        evolution: true,
        secondEvolution: 'One-Eye Felix',
        thirdEvolution: 'Silver Whiskers',
        pack: "Promo 2023"
    },
    {
        name: "One-Eye Felix",
        power: 7,
        ability: "Hunter - At the end of turn, if this defeated an enemy creature this turn, evolve to Silver Whiskers",
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
        evolution: true,
        evolved: true,
        pack: "Promo 2023"
    },
    {
        name: "Silver Whiskers",
        power: 6,
        ability: "Tough - Attack: Take control of a creature with power 5 or less",
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
        pack: "Promo 2023"
    },
    {
        name: "Ghost Hand",
        power: 2,
        ability: "Sneaky - Play: Boost 1 card to a creature. Boosted creatures cannot block.",
        double: false,
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
        boost: true,
        pack: "Promo 2023"
    },
    {
        name: "Solar Bear",
        power: 5,
        ability: "Tough - Attack: Boost 1 card to a creature or take control of a boosted creature",
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
        evolution: false,
        boost: true,
        pack: "Promo 2023"
    },
    {
        name: "Jean-Claw_Pandamme",
        power: 5,
        ability: 'Enemy creatures have "Attack: Discard a card"',
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
        pack: "Promo 2023"
    },
    {
        name: "Bug Catcher",
        power: 9,
        ability: "Frenzy Tough - Players cannot use Mindbugs",
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
            action: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Tuckbox Mimic",
        power: 2,
        ability: "Action: Boost 1 card to this. Evolve to Deckbox Mimic - Big Box Mimic",
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
        boost: true,
        secondEvolution: 'Deckbox Mimic',
        thirdEvolution: 'Big Box Mimic',
        pack: "Promo 2023"
    },
    {
        name: "Deckbox Mimic",
        power: 5,
        ability: "Action: Boost 1 card to this. You may evolve to Big Box Mimic",
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
        boost: true,
        pack: "Promo 2023"
    },
    {
        name: "Big Box Mimic",
        power: 6,
        ability: "Frenzy - Defeated: Play any number of boost cards from this without activating their Play effects",
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
            defeated: true,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Promo 2023"
    },
]

export {creatures};