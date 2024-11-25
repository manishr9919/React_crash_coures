const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
      default: [],
    },
  },

  { timestamps: true, versionKey: false }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;
