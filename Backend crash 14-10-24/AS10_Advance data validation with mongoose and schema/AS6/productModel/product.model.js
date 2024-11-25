const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      maxLength: [50, "The string must not exceed 50 characters."],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "The price must be a positive number."],
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: ["Electronics", "Clothing", "Books", "Home Applications"],
        message: `{VALUE} is not a valid category`,
      },
    },
    stock: {
      type: Number,
      required: true,
      min: [0, `stock should be integer and greater than or qual to 0`],
    },
    SKU: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^PROD-[A-Za-z0-9]{4}$/,
        "SKU must follow the pattern PROD-XXXX, where X is an alphanumeric character.",
      ],
    },
    tags: {
      type: [String], // defines `tag` as an array of strings
      validate: [
        {
          validator: function (tags) {
            // Ensure no duplicate tags
            return tags.length === new Set(tags).size;
          },
          message: "Tags must be unique.",
        },
        {
          validator: function (tags) {
            // Ensure each tag is non-empty and does not contain special characters
            return tags.every(
              (tag) => /^[A-Za-z0-9]+$/.test(tag) && tag.length > 0
            );
          },
          message:
            "Each tag must be a non-empty alphanumeric string without special characters.",
        },
      ],
    },
  },
  { versionKey: false }
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
