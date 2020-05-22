// -------------DataTypes-------------
// String
const corda = 'Luis'
// Number
const numero = 10 || 10.3 || false //floats are numbers
// Boolean
const boleano = true || false
// Undefined
let indefinido_1
console.log(indefinido_1)

let indefinido_2
console.log(indefinido_2)

// Null
let nulo = null
console.log(nulo)

// VARIABLES
// var / let / const

const variavel = 'String'
console.log(variavel);
// variavel = 'string 2'
// console.log(variavel);

function funçao() {
  if (variavel) {
    var nome = 'Luis'
    console.log(nome);

  }
  console.log(nome);

}

funçao()

// var deixa ser chamada/usada fora do bloco de codigo, raro de usar
// let so deixa ser chamada dentro do bloco de codigo, deve-se ser sempre usado o let