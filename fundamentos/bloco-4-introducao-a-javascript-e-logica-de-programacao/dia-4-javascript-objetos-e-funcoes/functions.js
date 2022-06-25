// 1° Questão:

function reverseString(palavra) {
    let splitString = palavra.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = splitString.join("");
    return joinArray;

}

function verificaPalindrome(palindrome) {
    if (reverseString(palindrome) === palindrome) {
        return true;
    }

        return false;

}

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('jojo'))

// 2° Questão:


function biggestNumbers(n1) {
    let maiorNumero = 0
    for(let index of n1) {
        if(index > maiorNumero) {
            maiorNumero = index
            
        }
    }

    return n1.indexOf(maiorNumero)
}
console.log(biggestNumbers([2, 3, 2, 20, 10, 1, 200, 800, 1000, 12, 15]))

// 3° Questão:

function lowestNumbers(n2) { 
    let menorNumero = n2[0]
    for(let index of n2) {
        if(index < menorNumero) {
            menorNumero = index
            
        }
    }

    return n2.indexOf(menorNumero)
}
console.log(lowestNumbers([2, 3, 2, 20, 10, 1, 200, 800, 1000, 12, 15]))

// 4° Questão:

function names(nameOf) {
    let maiorNome = nameOf[0]
    for(let index of nameOf) {
        if(index.length > maiorNome.length) {
            maiorNome = index
        }
    }

    return maiorNome
}

console.log(names(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 ° Questão:

function repeats(n3) {
    let maior = 0
    let numeroAtual = 0

    for(let index of n3) {
        let contador = 0
        let actualNumber = index
        for(let index2 of n3) {
            let comparedNumber = index2
        if(actualNumber === comparedNumber) {
            contador += 1
    }    
    }
        if(contador > maior) {
            maior += 1
            numeroAtual = actualNumber
        }
    }
        return numeroAtual;
    
}
console.log(repeats([2, 3, 2, 5, 8, 2, 3, 4, 4, 4, 5, 4, 6, 4, 2, 1, 4, 2, 3, 8, 9]))

// 6° Questão:

function natural(n4) {
    let resultadoSoma = 0
    for(let index = 0; index <= n4; index += 1) {
        resultadoSoma += index
    }

    return resultadoSoma;
}

console.log(natural(5))

// 7° Questão:

function words(word, ending) {
    let palavra = []
    for(let index = 0; index < ending.length; index += 1) {
        palavra.push(word[word.length - 1 - index])
    }

    palavra.reverse("")
    let final = palavra.join("")

    if(final === ending) {
        return true;
    } else {
        return false;
    }

}

console.log(words('joaofernando', 'fernando'))