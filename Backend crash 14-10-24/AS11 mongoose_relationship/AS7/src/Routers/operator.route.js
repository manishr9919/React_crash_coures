const express = require("express");
const operatorRoute = express.Router();
const OperatorModel = require("../model/operator.model");

operatorRoute.post("/addOperator", async (req, res) => {
  const operator = req.body;
  try {
    const newOperator = await new OperatorModel(operator);
    await newOperator.save();
    console.log(newOperator);
    res.status(201).json({ message: "operator add successfully", newOperator });
  } catch (error) {
    res.status(500).json({
      message: "error occur while adding operator",
      error: error.message,
    });
  }
});

module.exports = operatorRoute;
