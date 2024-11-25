const productModel = require("../models/product.model");

const createProduct = (product) => {
  const newProduct = new productModel(product);
  return newProduct;
};

module.exports = { createProduct };
