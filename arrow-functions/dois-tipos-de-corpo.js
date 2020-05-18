// block body - tem que especificar um retorno explicitamente.
const getObj = (num1, num2) => {
  return {
    firstNumber: num1,
    secondNumber: num2,
  }
}

console.log(getObj(5, 10)) // { firstNumber: 5, secondNumber: 10 }

// concise body - tem que especificar uma expressão e essa expressão é retornada de forma implícita.
const sum = (num1, num2) => num1 + num2

console.log(sum(3, 46)) // 49

// Retornando um objeto literal
const getObjWrongWay = (value) => {
  prop1: value
}

console.log(getObjWrongWay('hi')) // undefined - faltou o return

const getObj2 = (value) => ({
  prop1: value,
})

console.log(getObj2('Value 1')) // { prop1: 'Value 1' }
