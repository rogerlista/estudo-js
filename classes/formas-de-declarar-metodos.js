class Reptile {
  constructor(firstAppearance) {
    this.firstAppearance = firstAppearance
  }

  // métodos estáticos, invocados pelo nome da classe não pelo objeto criado
  // são métodos que pertencem a classe
  static getClassName() {
    return this.name
  }

  getFirstAppearance() {
    return this.firstAppearance
  }

  // métodos como uma propriedade, um shorthand
  get firstTimeAppearance() {
    return this.firstAppearance
  }

  // métodos como uma propriedade para set
  set newFirstAppearance(firstAppearance) {
    this.firstAppearance = firstAppearance
  }
}

console.log(Reptile.getClassName()) // Reptile

const smaug = new Reptile('The Hobbit')

console.log(smaug.getFirstAppearance()) // 'The Hobbit'
console.log(smaug.firstTimeAppearance) // 'The Hobbit'

console.log(smaug) // Reptile { firstAppearance: 'The Hobbit' }
smaug.newFirstAppearance = 'New Appearance Value'
console.log(smaug) // Reptile { firstAppearance: 'New Appearance Value' }
