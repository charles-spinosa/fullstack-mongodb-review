const todos = require('../database/index.js');
const helpers = {
  get: () => {
    return todos.find({}, null, { sort: { priority: 1 } });
  },
  add: ({ name, priority }) => {
    return todos.create({ name, priority });
  },
  delete: id => {
    return todos.deleteOne(id);
  },
  update: (id, body) => {
    return todos.findOneAndUpdate(id, body);
  }
};

module.exports = helpers;
