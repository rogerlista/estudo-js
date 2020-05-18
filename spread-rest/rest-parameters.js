// transformar os argumentos de uma função em um array.
// representa em um array os argumentos passados na invocação de uma função.

const showName = (...fullName) => {
  console.log(fullName)
}

showName('Juca', 'Bala', 'da', 'Silva') // [ 'Juca', 'Bala', 'da', 'Silva' ]

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)

console.log(sum(8, 3, 4)) // 15
