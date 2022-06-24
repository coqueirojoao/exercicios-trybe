// 1 ° Questão:

let n = 5

// let square = ''

// for(let linha = 0; linha <= n; linha += 1) {
//     for(let coluna = 0; coluna <= n; coluna += 1) {
//         square += '*'
//     }
//     console.log(square)
//     square = ''
// }

// 2° Questão:

// let rightTriangle = ''

// for(index = 0; index <= n; index += 1) {
//     rightTriangle += '*'
//     console.log(rightTriangle)
// }

// 3° Questão:

// let rightTriangle = ''
// let controlRight = 5
// let espaco = ''

// for(let index = 0; index <= n; index += 1) {
//     rightTriangle += '*'
//     for(let j = 0; j < controlRight; j += 1) {
//         espaco += ' '
//     }
//     console.log(espaco, rightTriangle)
//     controlRight -= 1
//     espaco = ''
// }

// 4° Questão:

let pyramid = ''

for(let index = 1; index <= n; index += 1) {
    if(index % 2 !== 0) {
        pyramid += '*'
        console.log(pyramid)
    }
}
