const express = require("express");
const Routers = express.Router();
const ProductModel = require("../productModel/product.model");
const productModel = require("../productModel/product.model");

Routers.post("/add_product", async (req, res) => {
  const { productName, price, category, stock, SKU, tags } = req.body;
  try {
    const newProduct = new ProductModel({
      productName,
      price,
      category,
      stock,
      SKU,
      tags,
    });

    const saveProduct = await newProduct.save();
    res
      .status(201)
      .json({ message: "product added successfully", saveProduct });
  } catch (error) {
    res
      .status(400)
      .json({ message: `product not added while ${error}`, error });
  }
});

Routers.get("/get_product", async (req, res) => {
  try {
    const getData = await ProductModel.find();
    res.status(200).json({ message: "product get successfully ", getData });
  } catch (error) {
    res.status(400).json({ message: "product id not fetch ", error });
  }
});
Routers.patch("/update_product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateValue = req.body;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      id,
      updateValue,
      { new: true }
    );
    res
      .status(203)
      .json({ message: "product updations is successful ", updateProduct });
  } catch (error) {
    res.status(400).json({ message: "product is not updated", error });
  }
});

Routers.delete("/delete_product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).send("product is not find");
    }
    const deleteProduct = await productModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "product delete successfully", deleteProduct });
  } catch (error) {
    res.status(400).json({ message: "product is not delete", error });
  }
});

module.exports = Routers;
