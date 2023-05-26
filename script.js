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
        evolutution: true,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: true,
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
        evolutution: false,
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
        evolutution: true,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: true,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: true,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
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
        evolutution: false,
        pack: "Beyond Evolution"
    },
]

//todo GOAT DRAGON

initialize();
function initialize() {
    let pageLoad = true;
    sortByAlph(pageLoad);
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
            }
        });
    } else {
        $(".card-container").append(`<h2 style="padding: 15px;">Sorry human, no results were found with your search criteria. Try again!</h2><div style="display: flex; justify-content: center;"><img style="max-width: 100%;" src="./img/wallpaper/mindbug.png"></div>`)
    }
    if (pageLoad == true) return;
    scrollToResults();
}

function scrollToResults() {
    $('html, body').animate({
        scrollTop: $(".card-container").offset().top
    });
}

$(".filter-btn").click(function() {
    let array = creatures;
    let firstContact;
    let addOn;
    let eternity;
    let evolution;
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
    let discard;
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
    if($('.discard').is(':checked')){
        discard = true;
    }
    array = getPack(array, firstContact, addOn, eternity, evolution);
    array = getKeywords(array, poisonous, hunter, frenzy, tough, sneaky);
    array = getTriggers(array, play, attack, defeated, discard)
    getOrder(array, alph, power, revPower);
})

function getPack(array, firstContact, addOn, eternity, evolution) {
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

function getTriggers(array, play, attack, defeated, discard) {
    if (play) {
        array = array.filter(creature => creature.triggers.play == true);
    } else if (attack) {
        array = array.filter(creature => creature.triggers.attack == true);
    } else if (defeated) {
        array = array.filter(creature => creature.triggers.defeated == true);
    } else if (discard) {
        array = array.filter(creature => creature.triggers.discard == true);
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