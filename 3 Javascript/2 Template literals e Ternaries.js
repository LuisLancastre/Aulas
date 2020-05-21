// ---------------------TEMPLATE LITERALS--------------------

const primeiro = 'Luis'
const ultimo = 'Lancastre'

//Concatenation - nao é a maneira mais eficiente
const nomeCompleto = 'O meu nome é ' + primeiro + ' ' + ultimo
console.log(nomeCompleto);

//Template Literals - deve-se usar sempre as template literals
const nomeCompleto2 = `O meu nome é ${primeiro} ${ultimo} `
console.log(nomeCompleto2);

//-----------------TERNARIES----------------------------

const constante = false // trocar falsa para true para mudar
// If else statement
let resultado

if (constante === true) {
  resultado = 'Verdadeiro'

} else {
  resultado = 'False'
}

console.log(resultado);

//Ternaries este maneira é mais legivel e facil 

const resultado_2 = constante === true ? 'Verdadeiro' : 'False'

console.log(resultado_2);
