// Antes es6
const oddNumbers = [1, 3, 5];
const firstOddNumber = oddNumbers[0];
const secondOddNumber = oddNumbers[1];

console.log(firstOddNumber, secondOddNumber);  // 1 3

// Despois es6
const [firstNumber, secondNumber] = oddNumbers;

console.log(firstNumber, secondNumber); // 1, 3

const [, , thirdNumber] = oddNumbers;

console.log(thirdNumber);  // 5

const sumFirstAndThirdNumber = ([firstEvenNumber, , thirdEvenNumber]) => firstEvenNumber + thirdEvenNumber;

console.log(sumFirstAndThirdNumber([2, 4, 6, 8]));  // 8