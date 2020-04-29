// Import modules 
import Bakery from "./classes/Bakery.mjs"
import Building from "./classes/Building.mjs"
import { buildings } from "./data/Data.mjs"

// Import élements
const cookiesStock = document.querySelector('#cookiesStock span')
const cookiePerSecond = document.querySelector('#cookiesPerSecond span')
const bakeryName = document.querySelector('#bakery h2')
const containerBuildings = document.getElementById('buildings')

// Instanciations des classes
const myBakery = new Bakery()
const building = new Building()

console.log(buildings)

// Quand la page est chargée
document.addEventListener("DOMContentLoaded", function() {
   bakeryName.innerHTML = myBakery._name
   cookiesStock.innerHTML = myBakery._cookies
   cookiePerSecond.innerHTML = myBakery._cookiesPerSecond
   for(let i = 0; i < buildings.length - 3; i++){
    let div = document.createElement('div')
    div.setAttribute('id', `building-${buildings[i].name}`)
    containerBuildings.appendChild(div)
    let divIcon = document.createElement('div')
    divIcon.setAttribute('class', 'icon')
    let divName = document.createElement('div')
    divName.setAttribute('class', 'name')
    divName.innerHTML = buildings[i].name
    let divCost = document.createElement('div')
    divCost.setAttribute('class', 'cost')
    divCost.innerHTML = buildings[i].cost
    let divNumber = document.createElement('div')
    divNumber.setAttribute('class', 'number')
    div.appendChild(divIcon)
    div.appendChild(divName)
    div.appendChild(divCost)
    div.appendChild(divNumber)
   }
});


// Function création batiment à revoir
// function BuildBatiment(){
//     console.log('ok# hello')
//     let div = document.createElement('div')
//     div.setAttribute('id', `building-${buildings[i].name}`)
// }
