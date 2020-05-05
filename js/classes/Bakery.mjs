class Bakery {
    constructor(name, cookies, buildings, cookiesPerClick, cookiesPerSecond) {
        this._name = "⚡️ Le four ⚡️"
        this._cookies = 1100
        this._buildings = []
        this._cookiesPerClick = 1
        this._cookiesPerSecond = 0
    }
    
    // Méthode incrémentant le nombre de cookies en stock
    bakeCookies(howMany){
        howMany = this._cookiesPerClick
       return this._cookies += howMany
    }
}

export default Bakery