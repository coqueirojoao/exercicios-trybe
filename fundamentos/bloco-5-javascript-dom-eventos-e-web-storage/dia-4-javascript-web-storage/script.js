let button = document.getElementsByTagName('button')[0]

button.addEventListener('click', darkMode)


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
    localStorage.setItem('fundoDaPagina', body.style.backgroundColor)
    localStorage.setItem('corDoParagrafo', p.style.color)
    localStorage.setItem('corDoTitulo', h1.style.color)
}

let buttonText = document.getElementsByTagName('button')[1]
buttonText.addEventListener('click', biggerText)

function biggerText() {
    let p = document.getElementsByTagName('p')[0]
    if (p.style.fontSize !== '25px') {
    p.style.fontSize = '25px'
    } else {
        p.style.fontSize = '17px'
    }
    localStorage.setItem('tamanhoDoTexto', p.style.fontSize)
}

let buttonFont = document.getElementsByTagName('button')[2]
buttonFont.addEventListener('click', fontChange)

function fontChange() {
    let p = document.getElementsByTagName('p')[0]
    if (p.style.fontFamily !== "Verdana") {
        p.style.fontFamily = "Verdana"
    } else {
        p.style.fontFamily = "Arial"
    }
    localStorage.setItem('mudarFonte', p.style.fontFamily)
}

function localData() {
let backgroundSalvo = localStorage.getItem('fundoDaPagina')
let corDoParagrafo = localStorage.getItem('corDoParagrafo')
let corDoTitulo = localStorage.getItem('corDoTitulo')
let tamanhoDoTexto = localStorage.getItem('tamanhoDoTexto')
let mudarFonte = localStorage.getItem('mudarFonte')

document.body.style.backgroundColor = backgroundSalvo
document.querySelector('p').style.color = corDoParagrafo
document.querySelector('p').style.fontSize = tamanhoDoTexto
document.querySelector('p').style.fontFamily = mudarFonte
document.querySelector('h1').style.color = corDoTitulo
}


window.onload = function() {
    localData()
}