// 1° Questão:

let resultado = 1;

for (let index = 10; index > 1; index -= 1) {
  resultado *= index;
}
console.log(resultado);

// 2° Questão:

let word = "Corinthians";

let backwards = "";

for (let index = 0; index < word.length; index += 1) {
  backwards += word[word.length - 1 - index];
}

console.log(backwards);

// 3° Questão:

let array = ["java", "javascript", "python", "html", "css", "c#", "kubernetes"];

let maior = array[0];
let menor = array[0];

for (indexOfMaior = 1; indexOfMaior < array.length; indexOfMaior += 1) {
  if (array[indexOfMaior].length > maior.length) {
    maior = array[indexOfMaior];
  }
}

for (indexOfMenor = 1; indexOfMenor < array.length; indexOfMenor += 1) {
  if (array[indexOfMenor].length < menor.length) {
    menor = array[indexOfMenor];
  }
}

console.log('A maior palavra da array é ' + maior);
console.log('A menor palavra da array é ' + menor);

// 4° Questão:

let maiorNumeroPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let numerosPrimos = true;
  for (let numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
    if (numeroAtual % numeroDivisor === 0) {
      numerosPrimos = false;
    }
  }
  if (numerosPrimos === true) {
    maiorNumeroPrimo = numeroAtual;
  }
}

console.log(maiorNumeroPrimo);
