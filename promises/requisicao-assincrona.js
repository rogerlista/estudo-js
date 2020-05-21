const axios = require('axios')
const url = 'https://dog.ceo/api/breeds/image/random'

const validateHTTPStatus = (dogData) => {
  if (dogData.statusText !== 'OK') {
    throw new Error(`HTTP error, status ${dogData.status}`)
  }

  return dogData.data
}

const setDogImg = ({ message: url }) => {
  console.log(url)
}

const handleRequestError = (err) => {
  console.log(err.message)
}

axios
  .get(url)
  .then(validateHTTPStatus)
  .then(setDogImg)
  .catch(handleRequestError)
