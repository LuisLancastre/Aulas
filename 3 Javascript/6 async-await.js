//-------- ASYNC / AWAIT------------
//Antigamente havia callbacks e começou-se a usar promises

const primeiro = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Primeiro');
      resolve('Primeiro')
    }, 2000);
  })
}

const segundo = () => {
  console.log('Segundo');
  return 'Segundo'
}

// primeiro()
// segundo()


const esperar = async () => {
  let pri = await primeiro()
  let seg = segundo()
}

esperar()