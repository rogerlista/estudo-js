const aPromise = new Promise((resolve, reject) => {
  const aNumber = 37
  // resolve(aNumber)
  reject(new Error('Algo de errado aconteceu.'))
})

aPromise
  .then((value) => {
    console.log(value) // 37
    return value * 3
  })
  .then((value) => {
    console.log(value) // 111
  })
  .catch((rejectValue) => {
    console.log(rejectValue) // Error: Algo de errado aconteceu.
  })
