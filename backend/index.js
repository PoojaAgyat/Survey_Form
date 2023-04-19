const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors")
const router = require('./routes/user');
const connection = require("./connection/connection");
const port = 3030 || process.env.PORT
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection()
  .then(() => {
    app.listen(port, () => console.log("Server is running at port 3030...",port));
  })
  .catch(() => {
    console.log("Failed to connect to database!");
  });
  app.use("/", router);
 