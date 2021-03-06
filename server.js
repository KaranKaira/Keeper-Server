//jshint esversion:6

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes");
const path = require("path"); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(notesRouter);
/*  DATABASE SETUP  */
mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const db = mongoose.connection;

//notifies if there is any error with connecting to the DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () => {
  console.log("Successfully connected to the Database.");
});


app.get('/' , (req,res)=>{
  res.send('server for KaranKaira-Keeper App ')
}) 

app.listen(PORT, function (req, res) {
    console.log("Server is listening on port " + PORT);
});