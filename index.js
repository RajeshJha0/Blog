const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dbuser:dbuserpassword@blogcluster.sxsww1w.mongodb.net/BMS");

const express = require("express");
const app = express();

const isBlog = require("./middlewares/isBlog");

app.use(isBlog.isBlog);

//for admin Routes
const adminRoute = require("./routes/adminRoute");
app.use('/',adminRoute);

app.listen(3000,function(){
    console.log("Server is running");
});

