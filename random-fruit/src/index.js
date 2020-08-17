const fruits = ['pera', 'manzana', 'frutilla', 'naranja'];

const randomFruit = () => {
  const fruit = fruits[Math.floor(Math.random()* fruits.length)];
  console.log(fruit);
};

module.exports = { randomFruit };