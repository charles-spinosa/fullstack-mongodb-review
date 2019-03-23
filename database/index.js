const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/mongoDos', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB');
});

const schema = mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true }
});

var todos = db.model('Todo', schema);

module.exports = todos;
