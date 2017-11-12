const express = require("express");
const path = require("path");

const app = express();

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

app.get('/home', (req, res) => {
    res.sendFile(path.join(`${__dirname}/Login/index.html`));
});

app.use('/Portfolio/assets', express.static(path.join(__dirname + '/Portfolio/assets')));

app.use('/ES6Playground/assets', express.static(path.join(__dirname + '/ES6Playground/assets')));

app.use('/FunnyLetters/assets', express.static(path.join(__dirname + '/FunnyLetters/assets')));

app.use('/Achievements/assets', express.static(path.join(__dirname + '/Achievements/assets')));

app.listen(3000);