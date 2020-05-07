import { buildings } from '../data.mjs'
import Building from '../classes/Building.mjs'
class Bakery {
    constructor(name, cookies, cookiesPerClick, cookiesPerSecond) {
        this._name = "⚡️ Le four ⚡️"
        this._cookies = 0
        this._buildings = buildings.map(building => {
            return new Building(building)
        })
        this._cookiesPerClick = 1
        this._cookiesPerSecond = 0
    }

    // Méthode incrémentant le nombre de cookies en stock
    bakeCookies(howMany) {
        howMany = this._cookiesPerClick
        return this._cookies += howMany
    }

    // Méthodes permettant de mettre à jour la bakery en fonction de la methode buy()
    buyBuilding(which){
        console.log(this._buildings[which]._cost )
        this._cookies = (this._cookies - this._buildings[which]._cost) - 1
        this._buildings[which].buy()
        // Revoir la troisième tuile arrondir a 1 chiffre apr!ès 
        this._cookiesPerSecond = this._cookiesPerSecond += this._buildings[which]._cookiesPerSecond
    }
}

// const bakery = new Bakery()
// console.log(bakery._cookiesPerSecond)
// bakery.buyBuilding(0)
// console.log(bakery._cookiesPerSecond)
export default Bakery