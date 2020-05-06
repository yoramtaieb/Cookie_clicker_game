// Importation des classes et data
import Bakery from './classes/Bakery.mjs'

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
function renderTuils(index) {
    // Index défini à l'appel et name pour update et remove la class disabled
    containerBuildings.innerHTML +=
        `<div id='building-${myBakery._buildings[index]._name.toLowerCase()}' class='locked disabled tuil ${index}'>
    <div class='icon'></div>
    <div class="boxInfos">
        <div class='name'>${myBakery._buildings[index]._name}</div>
        <div class='cost'>${myBakery._buildings[index]._cost}</div>
    </div>
    <div class='number'></div>
    </div>`

    document.getElementsByClassName('icon')[index].style.backgroundPosition = iconPositionLocked[index]
    test()
}

let count = 2
    // Mise à jour des tuiles en fonction de l'argent en poche
function UpdatingTuils(index, name) {
    const priceTuil = document.getElementsByClassName('cost')
        // Update Tuiles en fonctions de l'argent en poche
        // console.log(parseInt(priceTuil[index].innerHTML))
    if (myBakery._cookies > parseInt(priceTuil[index].innerHTML)) {
        // Paramètre name pour générer l'id dynamiquement afin de remove la class "disabled"
        let tuil = document.getElementById(`building-${[name]}`).classList.remove('disabled')
        let iconEnabled = document.getElementsByClassName('icon')[index].style.backgroundPosition = iconPositionEnabled[index]
    }
}

// Update des nouvelles tuiles render au dévérouillage d'une tuile précédente
function updateNewTuil() {
    let tuilsLength = document.querySelectorAll('.tuil').length - 1
    for (let i = 1; i <= tuilsLength; i++) {
        // console.log(myBakery._buildings[i]._name.toLowerCase())
        UpdatingTuils(i, myBakery._buildings[i]._name.toLowerCase());
    }
}

// Random un chiffre pour générer l'audio random 
function randomizeAudio() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
}

// EVENEMENT

// Au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    updatingValuesBakery()
    renderTuils(0)
    renderTuils(1)
})

// Au click sur le cookie 
bigCookie.addEventListener('click', (event) => {
    updatingValuesBakery()
        // console.log(myBakery._cookies)
    myBakery.bakeCookies()
        // Animation +1
    let divIncrement = document.createElement('div');
    divIncrement.setAttribute("id", 'divIncrement')
    divIncrement.innerHTML = '+1'
    bigCookie.appendChild(divIncrement)
    divIncrement.style.top = `${event.clientY}px`
    divIncrement.style.left = `${event.clientX}px`
    let audio = document.createElement('audio')
    audio.setAttribute('src', `./assets/sounds/click${randomizeAudio()}.mp3`)
    bigCookie.appendChild(audio)
    audio.play()
    bigCookie.appendChild(audio)
    bigCookie.addEventListener('animationend', (event) => {
        bigCookie.innerHTML = " "
    })
    UpdatingTuils(0, 'cursor')
    UpdatingTuils(1, 'grandma')
    let tuilsLength = document.querySelectorAll('.tuil').length - 2
        // console.log(tuilsLength)
    const priceTuil = document.getElementsByClassName('cost')
    if (myBakery._cookies > parseInt(priceTuil[tuilsLength].innerHTML)) {
        // console.log(count)
        renderTuils(count)
        count += 1
    }
    updateNewTuil()
})

function test(){
    const tuilsList = document.querySelectorAll('.tuil')
    tuilsList.forEach((tuil) => tuil.addEventListener('click', (e) => {
        // console.log(tuil)
        const priceTuil = document.querySelector(`#${tuil.id} .cost`)
        // console.log(document.querySelector(`#${tuil.id} .cost`).innerHTML)
        const numberBuilding = document.querySelector(`#${tuil.id} .number`)
        // console.log(parseInt(priceTuil.innerHTML))
        if(myBakery._cookies > parseInt(priceTuil.innerHTML)){
            // On achète une tuile
            myBakery.buyBuilding(parseInt(tuil.classList[2]))
            document.getElementById(`${tuil.id}`).classList.add('disabled')
            priceTuil.innerHTML = myBakery._buildings[`${parseInt(tuil.classList[2])}`]._cost
            numberBuilding.innerHTML = myBakery._buildings[`${parseInt(tuil.classList[2])}`]._number
            updatingValuesBakery()
        }
    }))
}

