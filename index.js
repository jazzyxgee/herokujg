const express = require("express");
const app = express();

/*class stuff*/
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(process.env.PORT || 5000);