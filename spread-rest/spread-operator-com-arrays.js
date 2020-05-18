// (...) - como prefixo de um objeto a ser desmembrado.
// pega um objeto interavel e desmembra em pedaços individuais.

const numbers = [71, 97, 53]

// o array numbers sera transformado em: 71,97,53
console.log(Math.max(...numbers)) // 97

// Antes
const myTopTwoSeries = ['Breaking Bad', 'True Detective']

const dramaSeries = ['The handmaid`s tale', 'House M.D.'].concat(myTopTwoSeries)

console.log(dramaSeries) // ['The handmaid`s tale', 'House M.D.', 'Breaking Bad', 'True Detective']

// Agora
const dramaSeries2 = ['The Handmaid`s Tale', ...myTopTwoSeries, 'House, M.D.']

console.log(dramaSeries2) // ['The Handmaid`s Tale', 'Breaking Bad', 'True Detective', 'House, M.D.']
