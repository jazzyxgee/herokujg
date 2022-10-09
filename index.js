const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(process.env.PORT || 5000);