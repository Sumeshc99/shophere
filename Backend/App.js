const express = require("express");
const app = express();

app.use(express.json());

//import routes
const products = require("./routes/Product");

app.use("/api/v1", products);

module.exports = app;
