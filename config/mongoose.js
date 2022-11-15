const mongoose = require('mongoose');

// connect mongoose to the database
mongoose.connect('mongodb://localhost/todo_list_db');

// acquiring that connection between mongoose and the database
const db = mongoose.connection;


db.on('error',console.error.bind(console,"error connecting to the databse"));

db.once('open', function(){
    console.log("connected to the databse");
});

