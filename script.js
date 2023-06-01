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
        name: "Creep From The Deep",
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
        name: "Turf The Surfer",
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
    },
    {
        name: "Agile Rooster",
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
            attack: true,
            defeated: false
        },
        pack: "Beyond Eternity"
    },
    {
        name: "Ant Zombie Horde",
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
            attack: true,
            defeated: false
        },
        boost: true,
        pack: "Beyond Eternity"
    },
    {
        name: "Berserker Rabbit",
        power: 6,
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
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Killer Bee",
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
            defeated: false,
            discard: true
        },
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Pegasus",
        power: 3,
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
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Shield Bugs",
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
            attack: false,
            defeated: false,
            discard: true
        },
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Blessed Tiger Squirrel",
        power: 3,
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
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Catalisk",
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
            attack: true,
            defeated: false
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Cave Lizard",
        power: 10,
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Cursed Gorillion",
        power: 10,
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
        boost: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Duckdra",
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
            attack: true,
            defeated: false
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Fire Antler",
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
            attack: false,
            defeated: true
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Goat Dragon",
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
            attack: true,
            defeated: false
        },
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Hiss Holiness",
        power: 5,
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Hypnotic Mouse",
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Koibra",
        power: 2,
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Radioactive Pest",
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
            attack: true,
            defeated: false
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Rockswapper",
        power: 8,
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Sea-Rex",
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
            attack: true,
            defeated: false
        },
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Soul Manipulator",
        power: 5,
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Spirit Cheetah",
        power: 6,
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Spirit Maki",
        power: 3,
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tailbeak",
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
            defeated: true
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tiger Wasp",
        power: 3,
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Tornado Dragon",
        power: 8,
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Urchin Teacher",
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
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Water Antler",
        power: 9,
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
        boost: true,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Wingsnout",
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
            attack: true,
            defeated: false
        },
        boost: false,
        discard: false,
        pack: "Beyond Eternity"
    },
    {
        name: "Bigroot",
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
            defeated: false,
            action: true
        },
        evolution: true,
        pack: "Beyond Evolution"
    },
    {
        name: "Blastfish",
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
        pack: "Beyond Evolution"
    },
    {
        name: "Infernostrich",
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
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Kitsunsei",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Mole Machine",
        power: 5,
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
        pack: "Beyond Evolution"
    },
    {
        name: "Octocopter",
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
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Puffermech",
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
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Radioactive Rabbit",
        power: 3,
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
        pack: "Beyond Evolution"
    },
    {
        name: "Turtle Toaster",
        power: 4,
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
        name: "Veteran Penguin",
        power: 5,
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
        pack: "Beyond Evolution"
    },
    {
        name: "Waddling Recruit",
        power: 3,
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
        pack: "Beyond Evolution"
    },
    {
        name: "Westside Monster",
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
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution"
    },
    {
        name: "Wildsprout",
        power: 1,
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
    },
    {
        name: "",
        power: "",
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
        pack: ""
    }
]

let animationDuration = 3000;

initialize();
function initialize() {
    let pageLoad = true;
    //updateCriteria(pageLoad);
    //sortByAlph(pageLoad);
    getOrderCriteria(pageLoad);
    getPackCriteria(pageLoad);
}

function updateCriteria(pageLoad) {
    getKeyWordCriteria(pageLoad);
    getTriggerCriteria(pageLoad);
    getPackCriteria(pageLoad);
    getOtherCriteria(pageLoad);
    getOrderCriteria(pageLoad);
}

function getKeyWordCriteria(pageLoad) {
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
    if (!pageLoad) {
        $(".criteria-keywords").addClass("alert");
        setTimeout(function(){
            $(".criteria-keywords").removeClass("alert");
       }, animationDuration);
    }
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
            message += "that interact with Boost"
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

$(".order").click(function() {
    $('.order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".criteria").click(function() {
    updateCriteria();
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

function sortByAlph(pageLoad) {
    let creaturesByAlph = creatures.sort(function(a, b) {
        return a === b ? 0 : a.name < b.name ? -1 : 1;
    });
    $(".card-container").empty();
    placeNewArray(creaturesByAlph, pageLoad);
};

function placeNewArray(array, pageLoad) {
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
    } else {
        $(".card-container").append(`<div><h2 style="padding: 15px;">Sorry human, no results were found with your search criteria. Try again!</h2><div style="display: flex; justify-content: center;"><img style="max-width: 100%;" src="./img/wallpaper/mindbug.png"></div></div>`)
    }
    if (pageLoad == true) return;
    scrollToResults();
}

function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".results").offset().top
    });
}

$(".filter-btn").click(function() {
    let array = creatures;
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
    let promo;
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
    let action;
    let discard;
    let boost;
    let evolved;
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
    if($('.action').is(':checked')){
        action = true;
    }
    if($('.discard').is(':checked')){
        discard = true;
    }
    if($('.boost').is(':checked')){
        boost = true;
    }
    if($('.evolved').is(':checked')){
        evolved = true;
    }
    array = getPack(array, firstContact, addOn, eternity, evolution, promo);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, action, discard);
    array = getOther(array, boost, evolved);
    getOrder(array, alph, power, revPower);
})

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
    $(".results").text(`${array.length} results found`)
}