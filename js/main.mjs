// Import modules 
import Bakery from "./classes/Bakery.mjs"
import Building from "./classes/Building.mjs"
import { buildings } from "./data/Data.mjs"

// Import éléments
const cookiesStock = document.querySelector('#cookiesStock span')
const cookiePerSecond = document.querySelector('#cookiesPerSecond span')
const bakeryName = document.querySelector('#bakery h2')
const containerBuildings = document.getElementById('buildings')

// Instanciation des classes
const myBakery = new Bakery()
const building = new Building()

console.log(buildings)

// Quand la page est chargée
document.addEventListener("DOMContentLoaded", function() {
    // Ajout du nom de la boulangerie
    bakeryName.innerHTML = myBakery._name
        //  Ajout du nombre de cookies
    cookiesStock.innerHTML = myBakery._cookies
        //  Ajout du nombre de cookies par secondes
    cookiePerSecond.innerHTML = myBakery._cookiesPerSecond
        //  Boucle for permettant de récupérer le cost et le name dans DATA_MJS en mettant -3 car il y 5 éléments
    for (let i = 0; i < buildings.length - 3; i++) {
        // Création d'une div avec un id "building" + ajout du name et du cost dans ma div "building"
        let div = document.createElement('div')
        div.setAttribute('id', `building-${buildings[i].name}`.toLowerCase())
            // Ajout de mes class "locked" et "disabled" à ma div building grâce à appendChild
        div.classList.add('locked')
        div.classList.add('disabled')
        containerBuildings.appendChild(div)
            // Création de ma div avec la class icon
        let divIcon = document.createElement('div')
        divIcon.setAttribute('class', 'icon')
            // Utilisation de "backgroundPositionX" pour permettre d'afficher l'icon cursor
        divIcon.style.backgroundPositionX = "-60px"
            //   Création de ma div avec la class name 
        let boxNameAndCost = document.createElement('div')
        let divName = document.createElement('div')
        divName.setAttribute('class', 'name')
        divName.innerHTML = "???"
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
});