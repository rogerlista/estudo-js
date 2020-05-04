// Função construtora é somente uma das formas de setar o prototype de um objeto.

// Funções construtoras não são o mesmo que Factory Functions.

// Como setar o prototype de um objeto através de uma função construtora?

// O que é uma função construtora?
// O papel de uma função construtora é facilitar a criação de múltiplos objetos com as mesmas propriedades.

const customPrototype = {
  greet() {
    return `${this.greeting} Guys`
  },
}

// Função construtora por convenção sempre tem a primeira letra maiúscula.
// Criando uma função construtora podemos criar novos objetos através dela.
function Greeting(term) {
  this.greeting = term
}

// Funções também são objetos e possuem uma propriedade "__proto__". É possível setar um prototype para todos os objetos que uma função construtora criar.
Greeting.prototype = customPrototype

// O que é o operador "new"?
// Criar uma instância de um objeto de uma função construtora.
// Utilizando o "new" acontecem 3 coisas:
// 1 - Um novo objeto vazio é criado e atribuído ao "this".
// 2 - O corpo da função é executado, modificando o "this" e adicionando novas propriedades a ele.
// 3 - O valor do "this" é retornado.
const hiGreet = new Greeting('Hi')

// O que é instância?
// É um objeto que tem o seu estado e comportamento definidos pela função construtora.
