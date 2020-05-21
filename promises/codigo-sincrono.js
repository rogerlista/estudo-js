let randomNumber = 9

setTimeout(() => {
  randomNumber += 100
  console.log(randomNumber)
}, 2000)

console.log(randomNumber)

// Vai sair
// 9
// 109 - depois de 2s

// e não o que poderia se esperar
// 109
// 109
