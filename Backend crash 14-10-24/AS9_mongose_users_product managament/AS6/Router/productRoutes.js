const ProductModel = require("../schema_model/product_model");
const express = require("express");
const productRoutes = express.Router();

productRoutes.post("/addProduct", async (req, res) => {
  try {
    const { name, quality, rate, rating } = req.body;
    const newProduct = new ProductModel({
      name,
      quality,
      rate,
      rating,
    });

    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res
      .status(201)
      .send({ message: "product created successfully", user: savedProduct });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Error saving product", details: error.message });
    console.log(error);
  }
});
productRoutes.get("/getAllProduct", async (req, res) => {
  try {
    const AllProduct = await ProductModel.find();
    res
      .status(200)
      .json({ massage: "Product get successfully", product: AllProduct });
  } catch (error) {
    console.log(`error while fetching data ${error}`);
  }
});
productRoutes.patch("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json({ massage: "product updated successfully" });

    console.log(updateProduct);
  } catch (error) {
    res.status(404).json({ massage: "error while product updations ", error });
    console.log(`error while updating the product`);
  }
});
productRoutes.delete("/deleteProduct/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await ProductModel.findByIdAndDelete(id);
  res.status(200).send({
    massage: "product deleted successfully",
    deleteItem: deleteProduct,
  });
});

module.exports = productRoutes;
