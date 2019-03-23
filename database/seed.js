const mongoose = require('mongoose');
const Todos = require('./index.js');

const seeds = [
  { name: 'pass the TA', priority: 1 },
  { name: 'sleep', priority: 2 },
  { name: 'play smash', priority: 3 }
];

const seedFunction = () => {
  Todos.insertMany(seeds)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.log(err));
};

seedFunction();
