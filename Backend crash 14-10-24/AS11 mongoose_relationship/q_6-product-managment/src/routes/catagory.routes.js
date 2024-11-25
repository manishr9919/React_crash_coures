const express = require("express");
const catagoryModel = require("../models/catagory.model");
const productModel = require("../models/product.model");

const catagoryRoutes = express.Router();

catagoryRoutes.get("/", async (req, res) => {
  try {
    const catagories = await catagoryModel.find();
    res.json(catagories);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

catagoryRoutes.patch("/:_id", async (req, res) => {
  const { description } = req.body;
  try {
    const updatedCategory = await catagoryModel.findByIdAndUpdate(
      req.params._id,
      { description },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(`${updatedCategory.name} updated successfully`);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

catagoryRoutes.delete("/:_id", async (req, res) => {
  try {
    const removedCatagory = await catagoryModel.findById(req.params._id);
    if (!removedCatagory) {
      res.status(404).send("catagory Not Found");
    }
    const products = await productModel.find({
      category: removedCatagory.name,
    });
    if (products?.length === 0) {
      res
        .status(404)
        .json({ message: "With this catagory No any product associated" });
    }

    const { action } = req.query;
    if (action === "delete") {
      await catagoryModel.findByIdAndDelete(req.params);
      const products = await productModel.deleteMany({
        category: removedCatagory.name,
      });
      return res.status(200).json({
        message: `Category '${removedCatagory.name}' and all associated products deleted successfully`,
      });
    } else if (action === "Uncategorized") {
      await catagoryModel.findByIdAndDelete(req.params);
      const products = await productModel.updateMany(
        { category: removedCatagory.name },
        { $set: { category: "Uncategorized" } }
      );
      return res.status(200).json({
        message: `Category '${removedCatagory.name}' deleted and products moved to 'Uncategorized'`,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid action. Use 'delete' or 'Uncategorized'" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting category", error: error.message });
  }
});
module.exports = catagoryRoutes;
