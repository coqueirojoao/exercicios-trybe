let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 ° questão:
// for(let contador of numbers) {
//     console.log(contador)
// }



let soma = 0

for(let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

// console.log(soma) - 2° questão

// console.log(soma/numbers.length) - 3° questão

// 4° questão:

// let mediaAritmetica = soma / numbers.length

// if (mediaAritmetica <= 20) {
//     console.log ('Valor menor ou igual a 20')
// } else {
//     console.log ('Valor maior que 20')
// }

// 5° questão:

// for (let maior = 0; maior < numbers.length; maior += 1) {
//     console.log(maior = Math.max.apply(null, numbers))
// }