const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app =express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes
app.get("/",(rep,res)=>{
    res.send("home page");
});

const PORT = process.env.PORT || 5000;

// connect to the database and start the server

mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {

            app.listen(PORT, ()=>{

                console.log('server Running on port ${PORT}')
            })
        })
        .catch((err) => console.log(err));
