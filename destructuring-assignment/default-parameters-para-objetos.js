// default parâmetro como fallback
const getName = ({ name = 'Unknown Name' }) => name;

console.log(getName({}));  // 'Unknown Name'

// default parâmetro no objeto
const getName2 = ({ name = 'Unknown Name 2' } = {}) => name;

// sem passar um objeto vazio
console.log(getName2());  // Unknown Name 2