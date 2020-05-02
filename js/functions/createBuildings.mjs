// Importation des modules 
import Bakery from "../classes/Bakery.mjs"
import Building from "../classes/Building.mjs"
import { buildings } from "../data/data.mjs"

// Imporation des éléments HTML
const cookiesStock = document.querySelector('#cookiesStock span')
const cookiePerSecond = document.querySelector('#cookiesPerSecond span')
const bakeryName = document.querySelector('#bakery h2')
const containerBuildings = document.querySelector('#buildings')
const buildingCursor = document.getElementById('building-cursor')

const myBakery = new Bakery()
const building = new Building()


// Ajout du nom de la boulangerie
bakeryName.innerHTML = myBakery._name
//  Ajout du nombre de cookies
cookiesStock.innerHTML = myBakery._cookies
//  Ajout du nombre de cookies par secondes
cookiePerSecond.innerHTML = myBakery._cookiesPerSecond

function CreateBuildings(){
    //  Boucle for permettant de récupérer le cost et le name dans DATA_MJS en mettant -3 car il y 5 éléments
for (let i = 0; i < 2; i++) {
    // Création d'une div avec un id "building" + ajout du name et du cost dans ma div "building"
    let div = document.createElement('div')
    div.setAttribute('id', `building-${buildings[i].name}`.toLowerCase())
        // Ajout de mes e class "locked" et "disabled" à ma div building grâce à appendChild
    div.className = "locked disabled"
    containerBuildings.appendChild(div)
        // Création de ma div avec la class icon
    let divIcon = document.createElement('div')
    divIcon.className = "icon"
        // Création de ma div avec la class name 
    let boxNameAndCost = document.createElement('div')
    let divName = document.createElement('div')
    divName.setAttribute('class', 'name')
    divName.innerHTML = '???'
    let divCost = document.createElement('div')
    divCost.setAttribute('class', 'cost')
    divCost.innerHTML = buildings[i].cost
    let divNumber = document.createElement('div')
    divNumber.setAttribute('class', 'number')
    div.appendChild(divIcon)
    boxNameAndCost.appendChild(divName)
    boxNameAndCost.appendChild(divCost)
    div.appendChild(boxNameAndCost)
    div.appendChild(divNumber) 
   }
   compare()

}

export default CreateBuildings

function compare(){
    let price = document.getElementsByClassName('cost')
    if(myBakery._cookies >= parseInt(price[0].innerHTML)){
        document.getElementById('building-cursor').classList.remove('disabled')
        // div.classList.remove('locked')
        let divName = document.getElementsByClassName('name')
        divName[0].innerHTML = buildings[0].name
    } if(myBakery._cookies >= parseInt(price[1].innerHTML)){
        document.getElementById('building-grandma').classList.remove('disabled')
        let divName = document.getElementsByClassName('name')
        divName[1].innerHTML = buildings[1].name
    }
}