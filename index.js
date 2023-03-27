const express = require("express");
const { default: mongoose, Mongoose } = require("mongoose");
require('dotenv').config(); 
const app = express();
const port = 8082;

const DB_URI = process.env.DB_URI;



mongoose
  .connect(`${DB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
   console.log(`${err}`)
  });

const userRoute = require('./routes/user.route');
app.use(express.json());
app.use('/user', userRoute);

app.listen(port, () => console.log(`Server app listening on port ${port}!`));

