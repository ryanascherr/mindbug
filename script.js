const creatures = [
    {
        name: "Axolotl Healer",
        power: 4,
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
        name: "Blessed Pegasus",
        power: 3,
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
        name: "Blessed Shield Bugs",
        power: 6,
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
        name: "Goat Dragon",
        power: 7,
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
        name: "Radioactive Pest",
        power: 1,
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
        name: "Tailbeak",
        power: 2,
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

$('select').on('change', function() {
    let power = parseInt($(this).val());
    let parent = $(this).parent();
    let relatedInput = $(parent).children('input');
    console.log(relatedInput);
    console.log(power);
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
    console.log(array);
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

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput"), creatureNames);

$(".auto-fill-submit").click(function() {
    let lonelyArray = []
    let cardName = $("#myInput").val();
    $(creatures).each(function() {
        if (this.name == cardName) {
            lonelyArray.push(this);
            return;
        }
    })
    prepareForCards(lonelyArray);
    placeCards(lonelyArray);
})

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
        console.log(randomNumber + " appeared " + howMany + " times");
        if (array[randomNumber].evolved == true) {
            console.log(array[randomNumber].name + " is an evolution, abort!");
            addCardToHand();
            return;
        }
        if (howMany == 0) {
            console.log("first time, all good!")
            usedNumbersArray.push(randomNumber);
            handOfCards.push(array[randomNumber]);
        } else if (howMany == 1) {
            if (!array[randomNumber].double) {
                console.log(array[randomNumber].name + " is a single, abort!");
            } else {
                console.log(array[randomNumber].name + " is a double, all good!");
                usedNumbersArray.push(randomNumber);
                handOfCards.push(array[randomNumber]);
            }
        } else if (howMany == 2) {
            console.log(array[randomNumber].name + " is already here twice, abort!")
        }
        
        if (handOfCards.length >= 5) {
            console.log(handOfCards);
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
    console.log("opening filter!");
    $(".auto-fill-parent-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".filter-container").removeClass("d-none");
    $(".results").removeClass("d-none");
}

function openName() {
    console.log("opening name!");
    $(".filter-container").addClass("d-none");
    $(".deal-hand-container").addClass("d-none");
    $(".auto-fill-parent-container").removeClass("d-none");
    $(".results").addClass("d-none");
}

function openHand() {
    console.log("opening hand!");
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
