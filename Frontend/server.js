const express = require("express");
const passport = require("passport");
const passportInit = require("./passportInit");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");

passportInit.initialize(passport);

const app = express();

app.use(session({ secret: "cats",
    resave: true,
    saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const isAuthenticatedMiddleware = function(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send("Not authorized");
    }
};

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + '/Portfolio/index.html'));
});

app.get('/ES6Playground',(req, res) => {
    res.sendFile(path.join(__dirname + '/ES6Playground/index.html'));
});

app.get('/rz', (req, res) => {
    res.sendFile(path.join(__dirname + '/FunnyLetters/index.html'));
});

app.get('/achievements', (req, res) => {
    res.sendFile(path.join(__dirname + '/Achievements/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(`${__dirname}/Login/index.html`));
});

app.use('/Portfolio/assets', express.static(path.join(__dirname + '/Portfolio/assets')));

app.use('/ES6Playground/assets', express.static(path.join(__dirname + '/ES6Playground/assets')));

app.use('/FunnyLetters/assets', express.static(path.join(__dirname + '/FunnyLetters/assets')));

app.use('/Achievements/assets', express.static(path.join(__dirname + '/Achievements/assets')));

app.use('/Login/assets', express.static(path.join(__dirname + '/Login/assets')));

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/someResponse');
    });

app.get('/someResponse', isAuthenticatedMiddleware, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

app.listen(3000);
console.log("Frontend is listening on port 3000");