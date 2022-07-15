const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1 Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const modifyObject = (object, key, value) => {
    object[`${key}`] = value;
    return object;
}

modifyObject(lesson2, 'turno', 'noite');

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => {
    const myArrayOfKeys = Object.keys(object);
    return myArrayOfKeys;
}

console.log(listKeys(lesson2));

// 3 Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const objLength = object => {
    const myArrayOfKeys = Object.keys(object);
    return myArrayOfKeys.length;
}

console.log(objLength(lesson1))

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = object => {
    const myArrayOfObjects = Object.values(object);
    return myArrayOfObjects;
}

console.log(listValues(lesson2))

// 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons)

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = () => {
    return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}

console.log(allStudents());

// 7 Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (allLessons, key, i) => {
    const teste = allLessons[`${key}`];
    const arrayOfValues = Object.values(teste);
    return arrayOfValues[i];
}

console.log(getValueByNumber(allLessons, 'lesson1', 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (object, key, value) => {
    const myObj = Object.entries(object);
    for (let i in myObj) {
        if (myObj[i][0] === key && myObj[i][1] === value) {
            return true
        }
    }
    return false
}

console.log(verifyPair(lesson1, 'turno', 'manhã'));