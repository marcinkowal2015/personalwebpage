const express = require("express");
const path = require("path");

const app = express();

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + '/Portfolio/index.html'));
});

app.use(express.static(path.join(__dirname + '/Portfolio/assets')));

app.listen(3000);