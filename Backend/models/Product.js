const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "product name can not exceed the limit of 100 characters"],
  },
  price: {
    type: Number,
    require: [true, "please enter product price"],
    maxLength: [5, "product name can not exceed the limit of 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    require: [true, "please enter product description"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please select the category"],
    enum: {
      values: ["electronics", "cameras", "laptops", "accessories"],
      message: "please select category of product",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter product seller"],
  },
  stock: {
    type: String,
    required: [true, "please enter product stock"],
    maxLength: [5, "product name can not be exceed the limit of 5"],
  },
  numOfReview: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
