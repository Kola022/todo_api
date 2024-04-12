const mongoose = require('mongoose');

const schemaData = {
    type: String,
    task: String,
    assigned: String,
    statusReport: String,
    date: Date
};

const Todos = mongoose.model('Todos', schemaData); //creates and connects to the collection Todos on MongoDB

module.exports = Todos; // exports Todos to other files or modules