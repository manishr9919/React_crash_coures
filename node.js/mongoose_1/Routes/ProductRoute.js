const express = require("express");
const Product = require("../model/ProductModel");

const ProductRoute= express.Router()
//  post the Product data is in Product endpoint

ProductRoute.post("/create_Product", async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save(); // Save the Product instance to the database
    res.status(201).send("Product added successfully");
  } catch (error) {
    console.error("Error adding Product:", error); // Log the error for debugging
    res.status(500).send("Error adding Product");
  }
});
// create the Product

ProductRoute.get("/find_Products", async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).send(Products);
  } catch (error) {
    console.log("error Fetching Products ");
    res.status(500).send({ message: "error fetching Products", error: message });
  }
});
//   Update the Product
ProductRoute.patch("/update_Products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const UpdateProducts = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!UpdateProducts) {
      return res.status(400).send("Product is not found ");
    }
    res.status(200).send("Product is updated");
  } catch (error) {
    console.log("error update Products ");
    res.status(500).send({ message: "error update Products", error: message });
  }

  //  Delete the Product by Id
});
ProductRoute.delete("/delete_Products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProducts = await Product.findByIdAndDelete(id);
    if (!deleteProducts) {
      return res.status(400).send("Product is not found ");
    }
    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.log("error update Products ");
    res.status(500).send({ message: "error deleted Products", error: message });
  }
});

module.exports=ProductRoute