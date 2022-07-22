// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


const employeeGen = (name) => {
    const array = name.split(' ')
    const email = `${array.join('_')}@trybe.com`;
    const obj = {
        Nome: name,
        Email: email.toLowerCase(),
    };

    return obj;
}


const newEmployees = () => {
    const employees = {
      id1: employeeGen('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeeGen('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeeGen('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees());


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const validate = (betNumber) => {
    const luckyNumber = Math.floor((Math.random() * 5) + 1);
    if (betNumber > 5 || betNumber < 1) {
        return `Insira um número válido de 1 a 5`
    }
    else if (betNumber !== luckyNumber) {
        return `Tente novamente!
O número sorteado foi: ${luckyNumber}`;
    }
    return `Parabéns você ganhou!
O número sorteado foi: ${luckyNumber}`;
}

const lotteryResult = (betNumber, equal) => {
    return equal(betNumber);
}

console.log(lotteryResult(5, validate));


// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const anwsersResult = (anwsers, studentAnwsers) => {
    let totalNumber = 0
    for (let i = 0; i < anwsers.length; i += 1) {
        if (anwsers[i] === studentAnwsers[i]) {
            totalNumber += 1
        } else if (studentAnwsers[i] === 'N.A') {
            totalNumber += 0
        } else {
            totalNumber -= 0.5
        }
    }

    return totalNumber;
}


const aproveTest = (anwsers, studentAnwsers, result) => {
    const counter = result(anwsers, studentAnwsers);

    return counter;
}

console.log(aproveTest(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], anwsersResult))