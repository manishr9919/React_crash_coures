const express = require("express");

const productModel = require("../model/product");
const categoryModel = require("../model/category");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/", async (req, res) => {
  const product = req.body;
  try {
    const newProduct = new productModel(product);
    console.log(newProduct);
    const category = await categoryModel.findOne({ name: newProduct.category });
    console.log(category);

    if (!category) {
      try {
        const newCategory = new categoryModel({
          name: newProduct.category,
          products: [newProduct._id],
        });
        await newCategory.save();
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    } else {
      try {
        category.products?.push(newProduct._id);
        await category.save();
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    }

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find(req.params);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(201).json({ message: "product update success", updatedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const removedProduct = await productModel.findByIdAndDelete(
      req.params.productId
    );
    if (!removedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    const category = await categoryModel.findOne({
      name: removedProduct.category,
    });
    if (!category) {
      res.send("catagory Not Found");
    } else {
      try {
        category.products = category.products.filter(
          (productId) => productId.toString() !== removedProduct._id.toString()
        );
        await category.save();
      } catch (error) {
        res.status(500).json("Internal server error");
      }
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: removedProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
});

module.exports = router;
