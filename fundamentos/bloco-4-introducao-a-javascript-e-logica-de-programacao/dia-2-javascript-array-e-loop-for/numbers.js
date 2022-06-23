let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 ° questão:
 for (let contador of numbers) {
    console.log(contador)
}

let soma = 0

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

console.log(soma) // 2° questão

console.log(soma/numbers.length) // 3° questão

// 4° questão:

 let mediaAritmetica = soma / numbers.length

 if (mediaAritmetica <= 20) {
     console.log ('Valor menor ou igual a 20');
} else {
     console.log ('Valor maior que 20');
}

// 5° questão:

 let maiorNumero = 0

 for (maior = 1; maior < numbers.length; maior += 1) {
     if (numbers[maior] > maiorNumero) {
         maiorNumero = numbers[maior]
     }
}

 console.log(maiorNumero)

// 6° Questão:

 let numerosPares = 0;

for (let pares = 0; pares < numbers.length; pares += 1) {
     if (numbers[pares] % 2 === 0) {
         numerosPares = numbers[pares];
         console.log(numerosPares)
    }
}


// 7° Questão:

 let menorNumero = numbers[0]

     for (menor = 1; menor < numbers.length; menor += 1) {
         if (numbers[menor] < menorNumero) {
             menorNumero = numbers[menor]
    }
}

// console.log(menorNumero)

// 8° Questão:

let array = []

for (let numeracao = 1; numeracao <= 25; numeracao += 1) {
     array.push(numeracao)
}

console.log(array)

// 9° Questão:

for (let divisao = 0; divisao < array.length; divisao += 1) {
    console.log(array[divisao] / 2)
}