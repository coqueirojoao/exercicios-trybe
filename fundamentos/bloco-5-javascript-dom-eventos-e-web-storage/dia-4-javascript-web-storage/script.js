let button = document.getElementsByTagName('button')[0]

button.addEventListener('click', darkMode)

const modificacoes = {
    
    bodyColor: 'white',
    pColor: 'black',
    h1Color: 'black',
    pSize: '17px',
    pFont: 'Arial',
    
}

function darkMode() {
    let body = document.body
    let p = document.getElementsByTagName('p')[0]
    let h1 = document.getElementsByTagName('h1')[0]
    if (body.style.backgroundColor !== 'black') {
    body.style.backgroundColor = 'black'
    p.style.color = 'white'
    h1.style.color = 'white'
    } else {
        body.style.backgroundColor = 'white'
        p.style.color = 'black'
        h1.style.color = 'black'
    }
}

let buttonText = document.getElementsByTagName('button')[1]
buttonText.addEventListener('click', biggerText)

function biggerText() {
    let p = document.getElementsByTagName('p')[0]
    if (p.style.fontSize !== '25px') {
    p.style.fontSize = '25px'
    localStorage.setItem('tamanhoDoTexto', JSON.stringify(p.style.fontSize))
    } else {
        p.style.fontSize = '17px'
        localStorage.setItem('tamanhoDoTexto', JSON.stringify(p.style.fontSize))
    }
}

let buttonFont = document.getElementsByTagName('button')[2]
buttonFont.addEventListener('click', fontChange)

function fontChange() {
    let p = document.getElementsByTagName('p')[0]
    if (p.style.fontFamily !== "Verdana") {
        p.style.fontFamily = "Verdana"
        localStorage.setItem('mudancaDo')
    } else {
        p.style.fontFamily = "Arial"
    }
}

function localData() {
    if (localStorage.getItem('teste') === null) {
        localStorage.setItem('teste', JSON.stringify(modificacoes))
    } else {
        const mudancas = JSON.parse(localStorage.getItem('teste'))
    }
}


window.onload = function() {
    localData()
}