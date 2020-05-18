const person = { name: 'Juca Bala' }

const address = {
  city: 'Goiâna',
  state: 'Goiás',
}

const juca = {
  ...person, // cópia propriedades e métodos de person para juca.
  ...address,
  country: 'Brasil',
}

console.log(juca) // { name: 'Juca Bala', city: 'Goiâna', state: 'Goiás', country: 'Brasil' }

const myArray = [1, 2, 3]

// Não funciona
// o que estaria sendo feito seria - const willGonnaFail = 1, 2, 3
// const willGonnaFail = ...myArray // SyntaxError: Unexpected token '...'

// console.log(willGonnaFail)

// ficar atento com a profundidade do objeto que sendo copiado.
// spread operator faz uma Shallow copy - cópia raza

const bill = {
  age: 11,
  toys: {
    favorite: 'Ball',
    lessUsed: 'Kangarro',
  },
}

const apollo = { ...bill }

bill.age = 111
bill.toys.favorite = 'anything'

console.log(`Bill's age: ${bill.age}`) // Bill's age: 111
console.log(`Apollo's age: ${apollo.age}`) // Apollo's age: 11

// cópia raza - aponta para a mesma referência de objeto (bill), não foi cópiada para o objeto (apollo), é a mesma propriedade.
console.log(`Bill's favorite toy: ${bill.toys.favorite}`) // Bill's favorite toy: anything
console.log(`Apollo's favorite toy: ${apollo.toys.favorite}`) // Apollo's favorite toy: anything

// Uma forma de fazer a cópia
const apollo2 = {
  ...bill,
  toys: {
    ...bill.toys,
  },
}

bill.age = 222
bill.toys.favorite = 'bike'

console.log(`Bill's favorite toy: ${bill.toys.favorite}`) // Bill's favorite toy: bike
console.log(`Apollo2's favorite toy: ${apollo2.toys.favorite}`) // Apollo's favorite toy: anything
