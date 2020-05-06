// Evite alterar parâmetros e coisas esternas a funções
const addNumberToArray = (number) => {
  numbers = numbers.concat(number)
  return numbers
}

// Prefira retornar um novo array ou objeto
const addNumberToArray = (number) => [...numbers, number]
