const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dbuser:dbuserpassword@blogcluster.sxsww1w.mongodb.net/");

const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.send('Hii!');
});

app.listen(3000,function(){
    console.log("Server is running");
});

