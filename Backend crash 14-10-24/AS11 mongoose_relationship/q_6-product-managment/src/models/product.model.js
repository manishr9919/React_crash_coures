const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      validate: {
        validator: (price) => price > 0,
        message: "Price must be a positive number",
      },
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      default: 0,
      validate: {
        validator: (stock) => stock >= 0 && Number.isInteger(stock),
        message: "Stock must be a non-negative integer",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel
