//------------------------CLASSES----------------

// class Pessoa {

//   constructor() {
//     this.primeiro = 'Luis'
//     this.ultimo = 'Lancastre'
//   }

//   Method
//   completo() {
//     console.log(this.primeiro + ' ' + this.ultimo)

//   }
// }

// const eu = new Pessoa()
// eu.completo()
// console.log(eu);
// console.log(eu.primeiro);
// console.log(eu.ultimo);

//Classes com parametros
class Pessoa {

  constructor(primeiro, ultimo) {
    this.primeiro = primeiro
    this.ultimo = ultimo
  }

  //Method
  completo() {
    console.log(this.primeiro + ' ' + this.ultimo)

  }
}

// const eu = new Pessoa('Luis', 'Lancastre')
// console.log(eu);


// const eu = new Pessoa('Ruben', 'Santos')
// const tu = new Pessoa('Miguel', 'Dias')

// console.log(eu);
// console.log(tu);

//Ampliar a classe // Extend Class

class idade extends Pessoa {
  constructor(primeiro, ultimo, nascimento) {
    super(primeiro, ultimo)
    this.nascimento = nascimento
  }
  idade() {
    let hoje = new Date()
    let nascimento = new Date(this.nascimento)
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    let mes = hoje.getMonth() - nascimento.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--
    }
    console.log(idade);

  }
}

const informaçao = new idade('Luis', 'Lancastre', '10/09/1998')

informaçao.idade()
// console.log(informaçao);
