//-------------DESTRUCTURING-------------

const pessoa_1 = {
  //Key:Value Pairs
  primeiro: 'Luis',
  prenome: 'Miguel',
  sobrenome: 'Lancastre'
}

// const primeiro = pessoa.primeiro
// const prenome = pessoa.prenome
// const sobrenome = pessoa.sobrenome


//Destructuring é mais legivel

// const {primeiro, prenome, sobrenome} = pessoa

//ALIAS
const { primeiro: first, prenome, sobrenome } = pessoa_1

console.log(first);
console.log(prenome);
console.log(sobrenome);

const pessoa_2 = ['Luis', 'Miguel', 'Santos']

// const pri = pessoa_2[0]
// const pre = pessoa_2[1]
// const sob = pessoa_2[2]

const [pri, pre, sob] = pessoa_2

console.log(pri);
console.log(pre);
console.log(sob);


//-------------------SPREAD OPERATOR--------------------

const array_1 = [1, 2, 3]
const array_2 = [4, 5, 6]

const juntar = [array_1, array_2]

console.log(juntar);

//Concatenation
const concatenation = array_1.concat(array_2)

console.log(concatenation);



//Spread
const spread = [...array_1, 3.5, 'ola', ...array_2]

console.log(spread);

//EXEMPLOS
//Objecto

const object = { ...array_1 }
console.log(object);

const somar = (a, b, c) => {
  console.log(a + b + c);

}
somar(...array_2)

//--------------------REST OPERATOR-----------------------

const multiplicar = (multiplicador, ...args) => {
  console.log(multiplicador);
  console.log(args);

  const multiplicados = args.map(arg => multiplicador * arg)
  console.log(multiplicados);


}

multiplicar(2, 5, 10, 20, 30, 140)