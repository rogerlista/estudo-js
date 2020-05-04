const customPrototype = {
  greet() {
    return `${this.greeting} Guys`
  },
}

const heyGreet = {
  greeting: 'hey',
}

// Recebe 2 argumentos:
// 1 - O objeto no qual o prototype vai ser setado.
// 2 - O objeto que deve ser o prototype do objeto passado no 1º parâmento.
Object.setPrototypeOf(heyGreet, customPrototype)

// Como saber se determinado objeto possui um determinado prototype?
// Como saber se um objeto é um prototype de um outro objeto?

customPrototype.isPrototypeOf(heyGreet) // true
