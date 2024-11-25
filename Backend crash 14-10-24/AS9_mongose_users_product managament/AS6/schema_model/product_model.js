const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    quality: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
