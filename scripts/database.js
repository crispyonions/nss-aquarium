const database = {
    fish: [
        {
            id: 1,
            image: "https://cdn-icons-png.flaticon.com/512/9352/9352928.png",
            species: "dartfish",
            location: "galapagos",
            named: "bart",
            length: 3,
            diet: "crustaceans"
        },

        {
        id: 2,
        image: "https://cdn-icons-png.flaticon.com/512/1728/1728753.png",
        species: "bluefin tuna",
        location: "monterey bay",
        named: "bluey",
        length: 4.2,
        diet: "krill"
        },

        {
        id: 3,
        image: "https://cdn-icons-png.flaticon.com/512/170/170465.png",
        species: "swordfish",
        location: "gulf of mexico",
        named: "stabby",
        length: 6.9,
        diet: "squids"
        },

        {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/3970/3970488.png",
        species: "arowana",
        location: "siak river",
        named: "goldie",
        length: 3.3,
        diet: "small insects"
        },

        {
        id: 5,
        image: "https://cdn-icons-png.flaticon.com/512/4033/4033863.png",
        species:"sunfish",
        location:"monterey bay",
        named: "sunny",
        length: 5.3,
        diet: "jellyfish"
        },

        {
        id: 6,
        image: "https://cdn-icons-png.flaticon.com/512/3038/3038282.png",
        species:"pufferfish",
        location:"congo river",
        named: "puffy",    
        length: 6,
        diet: "snails"
        },

        {
        id: 7,
        image: "https://cdn-icons-png.flaticon.com/512/4959/4959680.png",
        species: "whale shark",
        location: "galapagos",
        named: "biggie",
        length: 35.6,
        diet: "plankton"
        },

        {
        id: 8,
        image: "https://cdn-icons-png.flaticon.com/512/2281/2281210.png",
        species: "piranha",
        location: "orinoco river basin",
        named: "chompy",
        length: 7,   
        diet: "anything small enough"
        },

        {
        id: 9,
        image: "https://cdn-icons-png.flaticon.com/512/1915/1915331.png",
        species: "sockeye salmon",
        location: "lake washington",
        named: "sammy",
        length: 3.6,
        diet: "smelt"
        },

        {
        id: 10,
        image: "https://cdn-icons-png.flaticon.com/512/6255/6255702.png",
        species: "flounder",
        location: "cape fear",
        named: "pancake",
        length: 10,
        diet: "crustaceans"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}