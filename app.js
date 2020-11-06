const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const purchase = require("./routes/purchase");
const connection = require('./lib/db');
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("home");
});
// app.get("/purchase",function(req,res){
//     res.render("purchase");
// });
app.use('/purchase',purchase);

app.listen(3000,function(){
    console.log("Server running on Port 3000");
});