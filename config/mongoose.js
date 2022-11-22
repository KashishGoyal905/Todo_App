const mongoose = require('mongoose');

// connect mongoose to the database
mongoose.connect(`mongodb+srv://Kashish905:${encodeURIComponent('90500K@$#!shG')}@geetinstarted.klkdaic.mongodb.net/test`);

// acquiring that connection between mongoose and the database
const db = mongoose.connection;


db.on('error',console.error.bind(console,"error connecting to the databse"));

db.once('open', function(){
    console.log("connected to the databse");
});

