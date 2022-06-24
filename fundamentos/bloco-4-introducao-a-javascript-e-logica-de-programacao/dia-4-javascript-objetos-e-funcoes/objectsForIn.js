let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1° Questão:

console.log("Bem-vinda,", info.personagem);

// 2° Questão:

info.recorrente = "Sim";
console.log(info);

// 3° Questão:

for (let chaves in info) {
  console.log(chaves);
}

// 4° Questão:
for (let valores in info) {
  console.log(info[valores]);
}

// 6° Questão:

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}"`
);

// 7° Questão:

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

console.log(leitor.livrosFavoritos);

// 8° Questão:

console.log(
  leitor.nome,
  "tem",
  leitor.livrosFavoritos.length,
  "livros favoritos."
);
