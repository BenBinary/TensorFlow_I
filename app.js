const fs = require('fs');
const path = require('path');


const test = require('./public/test.js');
const script = require('./script.js');

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/index", function(req, res, next) {



    

    test.ersterTest();
    
    test.getPictures();


    res.render("index");

});


app.use(express.static("./public"));

app.listen(8080);

//const document = 

//document.addEventListener('DOMContentLoaded', run);

