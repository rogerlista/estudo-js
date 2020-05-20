// Antes es6
const furColor = 'brow';
const legs = 4;

const mouse = {
  furColor: furColor,
  legs: legs,
  tail: 'long, skinny',
  describe: function describe() {
    return '<p>A mouse with ' + this.furColor + ' fur, ' + this.legs + ' legs, and a ' + this.tail + ' tail.' + '</p>'
  },
};

console.log(mouse.describe());

const formatUser = function(name, avatar) {
  return {
    name: name,
    avatar: avatar,
  }
};

console.log(formatUser('Juca', 'juca-bala.jpg'));

// Depois es6
const furColor2 = 'brow';
const legs2 = 4;

const mouse2 = {
  furColor2,
  legs2,
  tail: 'long, skinny',
  describe() {
    return `<p>A mouse with ${this.furColor2} fur, ${this.legs2} legs, and a ${this.tail} tail.</p>`
  },
};

console.log(mouse2.describe());

const formatUser2 = (name, avatar) => ({
  name,
  avatar,
});

console.log(formatUser2('Juca', 'juca-bala.png'));