class Building{
    constructor(building){
        const {name, description, number, cookiesPerSecond, cost} = building 
        this._name = name
        this._description = description
        this._number = 0
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }

    buy(){
        this._number++
        return this._cost = Math.ceil(this._cost * 1.15)
    }
}

export default Building