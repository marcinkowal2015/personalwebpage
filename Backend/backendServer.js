const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const bodyParser = require("body-parser");

const users = [
    { id: 1, username: 'admin', password: 'qwe', email: 'bob@example.com' },
    { id: 2, username: 'user', password: '1234', email: 'joe@example.com' }
];

passport.use(new LocalStrategy(function (username, password, done) {
    console.log(username);
    console.log(password);
    if(username === "admin" && password === "qwe") {
        return done(null, users[0]);
    }
    return done(null, false, {message: 'Incorrect password'});
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   const user = users.find(function(user) {
       return user.id === id;
   });
   if(user) return done(null, user);
   done("aaa");
});
const app = express();

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

app.listen(3030);
console.log("App is listening on port 3030");