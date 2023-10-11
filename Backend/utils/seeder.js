const Product = require("../models/Product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/Database");

const products = require("../data/product.json");

//setting dotnet file
dotenv.config({ path: "Backend/config/config.env" });

connectDatabase();
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("product deleted");
    await Product.insertMany(products);
    console.log("all products addded");
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedProducts();
