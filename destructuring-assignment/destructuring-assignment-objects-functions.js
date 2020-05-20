const getName = options => options.name;

console.log(getName({ name: 'Juca' }));  // 'Juca'

const getName2 = ({ name }) => name;

console.log(getName2({ name: 'Juca Bala' }));  // 'Juca Bala'