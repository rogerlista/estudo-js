const dog = {
  name: 'Ellie',
  breed: 'Corgi',
  age: 4,
};

const { name, breed } = dog;

console.log(name, breed);  // 'Ellie' 'Corgi'

const { age } = dog;

console.log(age);  // 4

const { name: fullName, age: yearsOld } = dog;

console.log(fullName, yearsOld);  // 'Ellie' 4

const { notExists: naoExiste = 'Não existe essa propriedade (undefined), valor padrão' } = dog;

console.log(naoExiste);  // Não existe essa propriedade (undefined), valor padrão

// Objetos com propriedades aninhadas
const cities = {
  paris: {
    country: 'France',
    language: 'French',
  },
  stockholm: {
    country: 'Sweden',
    language: 'Swedish',
  },
};

const { paris, stockholm: { country } } = cities;

console.log(paris);  // { country: 'France', language: 'French' }

console.log(country);  // 'Sweden'
