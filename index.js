const express = require('express');
const app = express();
const port = 8000;

// for setting up cokkies
// for putting encrypted cookies into browser
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// encrypting the cookie
app.use(session({
    name: 'codeail',
    secret: 'blahblahblah',
    resave: false,
    saveUninitialized: false,
    // setting cookie age
    cokkie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// using passport || authenticating
app.use(passport.initialize());
// setting coolie into the browser
app.use(passport.session());


// requiring the connection between mongoose and mongodb
const db = require('./config/mongoose');
// parser
app.use(express.urlencoded());
// to use static files
app.use(express.static('./assets'));
// ṣending all the request to the home router
app.use('/', require('./routes'));



app.listen(port, function (err) {
    if (err) {
        console.log("error in running the server", err);
    }
    console.log(`server is up and running on port ${port}`);
});
