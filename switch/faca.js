const getMessage = (status) => {
  const messages = {
    200: 'Tudo OK',
    404: 'Não encontrado',
    500: 'Deu merda',
  }

  return messages[status] || ''
}

console.log(getMessage(200))
console.log(getMessage(404))
console.log(getMessage(500))
console.log(getMessage(600))
