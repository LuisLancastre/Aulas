//-------------------OBJECTS--------------------

const pessoa_1 = {
  //Key:Value Pairs
  primeiro: 'Luis',
  prenome: 'Miguel',
  sobrenome: 'Lancastre'
}

console.log(pessoa_1.primeiro);
// console.log(pessoa_1);

//------------ARRAYS-------------
//Indexes /                       Items
const pessoa_2 = ['Luis', 'Miguel', 'Santos', 'Lancastre']

// console.log(pessoa_2);
console.log(pessoa_2[0]);

//Mapa
const mapa = pessoa_2.map(nome => nome.toLocaleUpperCase())
const mapa = pessoa_2.map(nome => nome[0])
console.log(mapa);


//-------------OBJECTS IN ARRAYS----------
const data = [
  {
    primeiro: 'Luis',
    prenome: 'Miguel',
    sobrenome: 'Lancastre',
  },
  {
    primeiro: 'Ruben',
    prenome: 'Jardim',
    sobrenome: 'Dias',
  },
  {
    primeiro: 'Miguel',
    prenome: 'Andrade',
    sobrenome: 'Salvador',
  },
]

const nomes = data.map((pessoa) => `${pessoa.primeiro} ${pessoa.prenome} ${pessoa.sobrenome} `)

// console.log(nomes);
