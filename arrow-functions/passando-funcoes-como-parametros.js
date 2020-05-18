function logReturn(func, ...args) {
  console.log(func(...args))
}

// sem arrow function.
logReturn(
  function (x, y) {
    return x * y
  },
  5,
  8,
) // 40

// com arrow function.
logReturn((x, y) => x * y, 8, 5) // 40

// arrow function como expressão.
const double = (x) => x * 2

console.log(double(9)) // 18

// O que essa função esta fazendo
const nada = () => {} // não faz nada, não existe uma operação nela.

// Retornando algo
const objeto = () => ({}) // retorna um objeto literal.

// Ou também assim
const objeto2 = () => {
  return {}
} // retorna um objeto literal.
