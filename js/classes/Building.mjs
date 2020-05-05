class Building{
    constructor(building){
        const {name, description, number, cookiesPerSecond, cost} = building 
        this._name = name
        this._description = description
        this._number = 0
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }

}

export default Building