const Product = require("../models/Product");

//create new product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get all products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};

//get single product details
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log("res", res);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }

  res.status(200).json({
    status: true,
    product,
  });
};
