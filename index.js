const express = require("express");
const { default: mongoose, Mongoose } = require("mongoose");
const app = express();
const port = 8082;
require('dotenv').config(); 
const DB_URI = process.env.DB_URI;


app.get("/", (req, res) => res.send("King World!"));


mongoose
  .connect(`${DB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
   console.log(`${err}`)
  });

app.listen(port, () => console.log(`Server app listening on port ${port}!`));

