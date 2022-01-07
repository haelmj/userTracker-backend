const express = require('express');
const fs = require("fs");
const path = require("path");
const port = 8080;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");


const app = express();

//Middleware processing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, function () {
    console.log(`Node server is running... http://localhost:${port}`);
  });
