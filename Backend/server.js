const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const users = [
    { id: 1, username: 'admin', password: 'qwe', email: 'bob@example.com' },
    { id: 2, username: 'user', password: '1234', email: 'joe@example.com' }
];

passport.use(new LocalStrategy(function (username, password, done) {
    if(username === "admin" && password === "qwe") {
        return done(null, users[0]);
    }
    return done(null, false, {message: 'Incorrect password'});
}));
const app = express();



app.listen(3030);