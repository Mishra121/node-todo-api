var mongoose = require('mongoose');

// mongoose make validation and many functionalities simpler

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
