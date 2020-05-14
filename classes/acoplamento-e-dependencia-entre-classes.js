class MyClass {
  method1() {
    return 'String from method1'
  }

  dontWant() {
    throw new Error('Noooooo!')
  }
}

class MySubclass extends MyClass {
  method2() {
    return 'String from method2'
  }
}

const instanceOfClass = new MySubclass()

// Não era para permitir a chamada desse método pela subclass
// console.log(instanceOfClass.dontWant()) // Uncaught Error: Noooooo!

// Solução
// Trabalhando com objetos literais que tem só os métodos necessários

const method1 = {
  method1() {
    return 'String from method1'
  },
}

const dontWant = {
  dontWant() {
    throw new Error('Noooooooo!')
  },
}

const method2 = {
  method2() {
    return 'String from method2'
  },
}

// Herança através de objetos literais

const instance = { ...method1, ...method2 }

console.log(instance) // { method1: [Function: method1], method2: [Function: method2] }
console.log(instance.method1()) // String from method1
console.log(instance.method2()) // String from method2
