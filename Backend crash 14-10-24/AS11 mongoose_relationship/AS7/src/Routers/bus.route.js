const express = require("express");
const busRoute = express.Router();
const BusModel = require("../model/bus.model");
const OperatorModel = require("../model/operator.model");
const RouteModel = require("../model/route.model");
// create a endpoint for bus
busRoute.post("/addBus", async (req, res) => {
  // abstract data from req,body
  const {
    bus_number,
    capacity,
    operator,
    start_location,
    end_location,
    reservation,
  } = req.body;
  try {
    //find specific operator
    const oneOperator = await OperatorModel.findOne({ name: operator });
    // if operator is not find the return that operator is not found
    if (!oneOperator) {
      return res.status(404).send("operator is not found ");
    }
    //find specific route
    const oneRoute = await RouteModel.findOne({ start_location, end_location });
    // if route is not find the return that route is not found
    if (!oneRoute) {
      return res.status(400).send("route is not found ");
    }
    const newBus = await new BusModel({
      bus_number,
      capacity,
      operator: oneOperator._id, //associate operator id with bus
      route: oneRoute._id, //associate route id with bus
      reservation,
    });
    await newBus.save();
    console.log(newBus);
    //In specific operator assigned bus
    await oneOperator.buses.push(newBus._id);
    oneOperator.save();
     //In specific route assigned bus
    await oneRoute.buses.push(newBus._id);
    oneRoute.save();

    res.status(201).json({ message: "bus added successfully ", newBus });
  } catch (error) {
    res.status(500).json({
      message: "error occur while adding operator",
      error: error.message,
    });
  }
});

module.exports = busRoute;
