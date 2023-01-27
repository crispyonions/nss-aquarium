import { getFish } from './database.js'

export const FishList = () => {
    const fishes = getFish()

    let htmlString = '<article class="fishList">'

    for (const fish of fishes) {
        htmlString += `<section class="fish card">
            <img class="fish-img" src="${fish.image}"/>
            <div class="fish__named">name: ${fish.named}</div>
            <div class="fish__species">species: ${fish.species}</div>
            <div class="fish__length">length: ${fish.length}</div>
            <div class="fish__location">caught: ${fish.location}</div>
            <div class="fish__diet">eats: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


