const express = require("express");
const passengerRoute = express.Router();
const PassengerModel = require("../model/passenger.model");

passengerRoute.post("/addPassenger", async (req, res) => {
  passengerData = req.body;
  try {
    const newPassenger = await new PassengerModel(passengerData);
    await newPassenger.save();
    res
      .status(201)
      .json({ message: "passenger added successfully", newPassenger });
  } catch (error) {
    res.status(500).json({
      message: "error occur while adding new passenger",
      error: error.message,
    });
  }
});

module.exports = passengerRoute;
