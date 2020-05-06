const users = [
  {
    name: 'Juca Bala',
    isActive() {
      return true
    },
  },

  {
    name: 'Teobaldo da Silva',
    isActive() {
      return false
    },
  },

  {
    name: 'Tabajara Limeira',
    isActive() {
      return true
    },
  },
]

const database = {
  lookup(record) {
    return record
  },
}

const sendEmail = (user) => console.log(`Enviando e-mail para ${user.name}`)

// ========= Evite

const emailUsers = (users) => {
  users.forEach((user) => {
    const userRecord = database.lookup(user)

    if (userRecord.isActive()) {
      sendEmail(user)
    }
  })
}

emailUsers(users)

// ========= Prefira

const isActiveUser = (user) => {
  const userRecord = database.lookup(user)
  return userRecord.isActive()
}

const emailActiveUsers = (users) =>
  users.filter(isActiveUser).forEach(sendEmail)

emailActiveUsers(users)
