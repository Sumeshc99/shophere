const express = require("express");
const app = express();

const errorMiddlewares = require("./middlewares/errors");

app.use(express.json());

//import routes
const products = require("./routes/Product");

app.use("/api/v1", products);

//middlewares to handle error
app.use(errorMiddlewares);

module.exports = app;
