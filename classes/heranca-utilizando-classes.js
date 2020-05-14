class Reptile {
  constructor(firstAppearance) {
    this.firstAppearance = firstAppearance
  }

  getFirstAppearance() {
    return this.firstAppearance
  }
}

class Dragon extends Reptile {
  constructor(firstAppearance) {
    super(firstAppearance)
  }
}

const smaug = new Dragon('The Hobbit')

console.log(smaug.getFirstAppearance()) // The Hobbit
