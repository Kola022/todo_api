

const mongoose = require('mongoose');

function connect(){mongoose.connect('mongodb://127.0.0.1:27017/TodoList');}

module.exports = {connect}


/* OR
const mongoose = require('mongoose');

function connect() {
  // Replace with your actual MongoDB connection string
  mongoose.connect('mongodb://127.0.0.1:27017/Todo-db');
}

// Call the connect function outside the module.exports
connect(); // Call connect here

module.exports = {
  connect // Export the connect function if needed
};
*/