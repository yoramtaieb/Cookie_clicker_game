// Importation des classes et data
import Bakery from './classes/Bakery.mjs'
import { buildings } from './data.mjs'

// Importation d'éléments HTML
const containerBuildings = document.querySelector('#buildings')
const bakeryName = document.querySelector('#bakery h2')
const cookiesStock = document.querySelector('#cookiesStock span')
const cookiesPerSecond = document.querySelector('#cookiesPerSecond span')

// Instanciation des classes 
const myBakery = new Bakery()

function updatingValuesBakery(){
    bakeryName.innerHTML = myBakery._name
    cookiesStock.innerHTML = myBakery._cookies
    cookiesPerSecond.innerHTML = myBakery._cookiesPerSecond
}

let iconPositionLocked = ['-65px 0px', '-65px -60px', '-65px -195px', '-65px -260px', '-65px -320px']

let iconPositionEnabled = ['0px 0px', '-65px -60px', '-65px -195px', '-65px -260px', '-65px -320px']

function renderTuils(index, name){
    // Render Tuiles
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
    const priceTuil = document.getElementsByClassName('cost')

    // Update Tuiles en fonctions de l'argent en poche
    if(myBakery._cookies > parseInt(priceTuil[index].innerHTML)){
        let tuil = document.getElementById(`building-${[name]}`).classList.remove('disabled')
        let iconEnabled = document.getElementsByClassName('icon')[index].style.backgroundPosition = iconPositionEnabled[index]
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatingValuesBakery()
    renderTuils(0, 'cursor')
    renderTuils(1, 'grandma')
    renderTuils(2, 'farm')
    renderTuils(3, 'mine')
})