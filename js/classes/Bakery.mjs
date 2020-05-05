import { buildings } from '../data.mjs'
import Building from '../classes/Building.mjs'
class Bakery {
    constructor(name, cookies, cookiesPerClick, cookiesPerSecond) {
        this._name = "⚡️ Le four ⚡️"
        this._cookies = 100000
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
}

const bakery = new Bakery()
console.log(bakery._buildings)
export default Bakery