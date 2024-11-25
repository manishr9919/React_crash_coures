const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: {
      type: Number,
      required: [true, "Price is required"],
      validate: {
        validator: (price) => price > 0,
        message: "Price must be a positive number",
      },
    },
    category: { type: String, required: [true, "category must be required"] },
    stock: {
      type: Number,
      required: true,
      default: 0,
      validate: {
        validator: (value) => value > 0 && Number.isInteger(value),
      },
    },
  },
  { timestamps: true, versionKey: false }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
