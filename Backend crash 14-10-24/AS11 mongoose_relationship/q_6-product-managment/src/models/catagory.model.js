const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: [true, "Category name must be unique"],
    },
    description: {
      type: String, 
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
      default: [], 
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const catagoryModel = mongoose.model("Category", categorySchema);
module.exports = catagoryModel