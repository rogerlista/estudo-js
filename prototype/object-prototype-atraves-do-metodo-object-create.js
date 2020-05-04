// O qué o "Object.create()"?
// Um método que cria um novo objeto, e usa um objeto que já existe como prototype desse novo objeto criado.

const customPrototype = {
  greet() {
    return `${this.greeting} Guys`
  },
}

const helloGreet = Object.create(customPrototype)
helloGreet.greeting = 'Hello'
