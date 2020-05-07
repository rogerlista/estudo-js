const getMessage = (status) => {
  let message = ''

  switch (status) {
    case 200:
      message = 'Tudo Ok'
      break
    case 404:
      message = 'Não encontrado'
      break
    case 500:
      message = 'Deu merda'
      break
  }

  return message
}

console.log(getMessage(200))
console.log(getMessage(404))
console.log(getMessage(500))
console.log(getMessage(600))
