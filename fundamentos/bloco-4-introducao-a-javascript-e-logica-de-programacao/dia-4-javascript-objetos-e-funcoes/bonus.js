// 2° Questão:

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function arrayOfNumbers(n1) {
  const pares = [];
  for (let index = 0; index < n1.length; index += 1) {
    let teste = n1[index];
    for (let index2 = 0; index2 < teste.length; index2 += 1) {
      let actuals = teste[index2];
      if (actuals % 2 === 0) {
        pares.push(actuals);
      }
    }
  }
  return pares;
}

console.log(arrayOfNumbers(vector));

// 3° Questão:

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function frutas() {
  let counts = {};

  for (var i = 0; i < basket.length; i++) {
    counts[basket[i]] = counts[basket[i]] + 1 || 1;
  }
  console.log(counts);
  console.log(
    "Sua cesta possui",
    counts["Melancia"],
    "melancias,",
    counts["Abacate"],
    "abacates,",
    counts["Uva"],
    "uvas,",
    counts["Laranja"],
    "laranjas,",
    counts["Jaca"],
    "jacas,",
    counts["Pera"],
    "peras,",
    counts["Banana"],
    "bananas."
  );
}
frutas();

// 4° Questão:

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(
  "O morador do bloco 2 de nome",
  moradores.blocoDois[1].nome,
  moradores.blocoDois[1].sobrenome,
  "mora no",
  moradores.blocoDois[1].andar + "°",
  "andar, apartamento",
  moradores.blocoDois[1].apartamento
);

// 5° Questão:

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(
    moradores.blocoUm[index].nome,
    moradores.blocoUm[index].sobrenome
  );
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(
    moradores.blocoDois[index].nome,
    moradores.blocoDois[index].sobrenome
  );
}
