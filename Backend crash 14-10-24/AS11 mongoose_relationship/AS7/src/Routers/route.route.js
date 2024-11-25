const express = require("express");
const RouteRoute = express.Router();
const RouteModel = require("../model/route.model");

RouteRoute.post("/addRoute", async (req, res) => {
  const route = req.body;
  try {
    const newRoute = await new RouteModel(route);
    await newRoute.save();
    console.log(newRoute);
    res.status(201).json({ message: "route add successfully", newRoute });
  } catch (error) {
    res.status(500).json({
      message: "error occur while adding route",
      error: error.message,
    });
  }
});

module.exports = RouteRoute;
