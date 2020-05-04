// Importation des classes et data
import Bakery from './classes/Bakery.mjs'
import { buildings } from './data.mjs'

// Importation d'éléments HTML
const bakeryName = document.querySelector('#bakery h2')
const cookiesStock = document.querySelector('#cookiesStock span')
const cookiesPerSecond = document.querySelector('#cookiesPerSecond span')
const bigCookie = document.getElementById('bigCookie')
const containerBuildings = document.querySelector('#buildings')


// Instanciation des classes 
const myBakery = new Bakery()

// Tableaux positions icons
let iconPositionLocked = ['-65px 0px', '-65px -60px', '-65px -195px', '-65px -260px', '-65px -320px']
let iconPositionEnabled = ['0px 0px', '1px -65px', '1px -198px', '1px -255px', '1px -320px']

// FUNCTIONS

// Mise à jour dynamique de la section Bakery
function updatingValuesBakery() {
    bakeryName.innerHTML = myBakery._name
    cookiesStock.innerHTML = myBakery._cookies
    cookiesPerSecond.innerHTML = myBakery._cookiesPerSecond
}

// Créations des tuiles 
function renderTuils(index, name) {
    // Index défini à l'appel et name pour update et remove la class disabled
    containerBuildings.innerHTML +=
        `<div id='building-${buildings[index].name.toLowerCase()}' class='locked disabled'>
    <div class='icon'></div>
    <div class="boxInfos">
        <div class='name'>${buildings[index].name}</div>
        <div class='cost'>${buildings[index].cost}</div>
    </div>
    <div class='number'></div>
    </div>`

    document.getElementsByClassName('icon')[index].style.backgroundPosition = iconPositionLocked[index]
    // Passage des paramètres index et name de renderTuils
    UpdatingTuils(index, name)
}

// Mise à jour des tuiles en fonction de l'argent en poche
function UpdatingTuils(index, name){
    const priceTuil = document.getElementsByClassName('cost')
    // Update Tuiles en fonctions de l'argent en poche
    if (myBakery._cookies >= parseInt(priceTuil[index].innerHTML)) {
        // Paramètre name pour générer l'id dynamiquement afin de remove la class "disabled"
        let tuil = document.getElementById(`building-${[name]}`).classList.remove('disabled')
        let iconEnabled = document.getElementsByClassName('icon')[index].style.backgroundPosition = iconPositionEnabled[index]
    } 
}

// EVENEMENT

// Au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    updatingValuesBakery()
    renderTuils(0, 'cursor')
    renderTuils(1, 'grandma')
    renderTuils(2, 'farm')
    renderTuils(3, 'mine')
    renderTuils(4, 'factory')
})

// Au click sur le cookie 
bigCookie.addEventListener('click', () => {
    updatingValuesBakery()
    // console.log(myBakery._cookies)
    myBakery.bakeCookies()
    UpdatingTuils(0, 'cursor')
    UpdatingTuils(1, 'grandma')
    UpdatingTuils(2, 'farm')
    UpdatingTuils(3, 'mine')
    UpdatingTuils(4, 'factory')
})
