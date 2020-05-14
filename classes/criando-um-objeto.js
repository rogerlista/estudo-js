// Toda classe em JavaScript tem um constructor.
// Se não criar um constructor em uma classe o JavaScript cria um constructor default por baixo dos panos.

// Constructor é um método especial que cria e inicializa um objeto gerado à partir de uma classe.
// Dentro do constructor pode ser criar as propriedades iniciais que o objeto vai ter.

class Reptile {
  constructor(firstAppearance) {
    this.firstAppearance = firstAppearance
  }
}

// criando o objeto smaug através da classe Reptile.
// novo objeto criado: { firstAppearance: 'The Hobbit' } e atribuído a variável smaug.
const smaug = new Reptile('The Hobbit')
