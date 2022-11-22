// file for authenticate user who is trying to sign in.

// requiring passport
const passport = require('passport');

// requiring local strategy for local level authentication
const LocalStrategy = require('passport-local').Strategy;

// requiring user schema->i havent made one yet
// const User = require('../models/user_schema');

// telling passport to use local strategy for local level authentication
passport.use(new LocalStrategy({
    // setting the unique feild by which we want to authenticate or find user
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("error in finding the user-->passport");
                return done(err);
            }

            if (!user || user.password != password) {
                console.log("invalid username/password");
                return done(null, false);
            }
            // sending authenticated user
            return done(null, user);
        });
    }
));

// now we need to tell passport to which key to put in the coolies either username ,id or other keys
// it will only tell not put cokkie there.
passport.serializeUser(function (user, done) {
    // sending user id
    return done(null, user.id);
});

// now when the cookie come with the req from the server it is encrypter and to authenticate we need to derypt it
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log("error in finding the user-->passport");
            return done(err);
        }
        // sending user
        return done(null, user);
    })

});

// function to check authentication
passport.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/users/sign-in');
}

// to set the user in local to aceess i the ejs file
passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}

// exporting passport not strategy
module.exports = passport;