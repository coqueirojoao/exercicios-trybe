// 1 - Crie uma função que receba um número e retorne seu fatorial.

const factorialNumber = (number) => {
    let contador = number;
    for (let index = 1; index < number; index += 1) {
        contador *= index;
    }
    return contador;
}

console.log(factorialNumber(4));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra.

const longestWord = (phrase) => {
    const array = phrase.split(' ');
    let biggestWord = array[0]

    for (let index of array) {
        if (index.length > biggestWord.length) {
            biggestWord = index;
        }
    }

    return biggestWord
    
}

// 3 - 🚀 Crie uma página com um contador de cliques

let clickCount = 0
const button = document.querySelector('button');
clickCount.innerText = 0;

function clickCounter() {
    clickCount += 1
    document.querySelector('span').innerText = clickCount;
}
button.addEventListener('click', clickCounter);