const express = require("express");
const { createProduct } = require("../controlers/controler");
const productModel = require("../models/product.model");
const catagoryModel = require("../models/catagory.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const product = req.body;
  try {
    const newProduct = createProduct(product);
    console.log(newProduct);
    const catagory = await catagoryModel.findOne({ name: newProduct.category });
    console.log(catagory);

    if (!catagory) {
      try {
        const newCatagory = new catagoryModel({
          name: newProduct.category,
          products: [newProduct._id],
        });
        await newCatagory.save();
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    } else {
      try {
        catagory.products?.push(newProduct._id);
        await catagory.save();
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
    const catagory = await catagoryModel.findOne({
      name: removedProduct.category,
    });
    if (!catagory) {
      res.send("catagory Not Found");
    } 
    else {
      try {
        catagory.products = catagory.products.filter(
          (productId) => productId.toString() !== removedProduct._id.toString()
        );
        await catagory.save();
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
