const express = require("express");
const mongoose = require("mongoose");
const readRoute = express.Router();
const BusModel = require("../model/bus.model");
const PassengerMOdel = require("../model/passenger.model");
const ReservationModel = require("../model/reservation.model");

///1: get allBusses for specific operator
readRoute.get("/allBusSpecificOperator/:operatorId", async (req, res) => {
  const { operatorId } = req.params;
  console.log(operatorId);

  try {
    if (!mongoose.Types.ObjectId.isValid(operatorId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid operator ID format" });
    }

    // Query to find buses where the operator array contains the provided operatorId
    const allBuses = await BusModel.find({
      operator: { $in: [new mongoose.Types.ObjectId(operatorId)] },
    });

    if (allBuses.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No buses found for this operator" });
    }

    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching buses",
      error: error.message,
    });
  }
});

///2: get allBusses for specific route

readRoute.get("/allBusSpecificRoute/:routeId", async (req, res) => {
  const { routeId } = req.params;
  //   console.log(routeId);

  try {
    if (!mongoose.Types.ObjectId.isValid(routeId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid operator ID format" });
    }

    // Query to find buses where the operator array contains the provided operatorId
    const allBuses = await BusModel.find({
      route: { $in: [new mongoose.Types.ObjectId(routeId)] },
    }).populate("route");

    if (allBuses.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No buses found for this operator" });
    }

    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching buses",
      error: error.message,
    });
  }
});
//3: get details about reservation specific by passengerId

readRoute.get("/getSpecificReservation/:passengerId", async (req, res) => {
  const { passengerId } = req.params;
  //   console.log(routeId);

  try {
    if (!mongoose.Types.ObjectId.isValid(passengerId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid operator ID format" });
    }

    // Query to find buses where the operator array contains the provided operatorId
    const reservationDetails = await ReservationModel.find({
      passenger: passengerId,
    })
      .populate("bus")
      .populate("passenger");

    if (reservationDetails.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No buses found for this operator" });
    }

    res.status(200).json({ success: true, data: reservationDetails });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching buses",
      error: error.message,
    });
  }
});

//4: get all details about reservation made by specific by passenger

readRoute.get(
  "/passengerDetailsOnSpecificReservation/:reservationId",
  async (req, res) => {
    const { reservationId } = req.params;
    console.log(reservationId);

    try {
      if (!mongoose.Types.ObjectId.isValid(reservationId)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid operator ID format" });
      }

      // Query to find passenger where the passenger array contains the provided operatorId
      const allPassenger = await PassengerMOdel.find({
        reservations: { $in: [new mongoose.Types.ObjectId(reservationId)] },
      });

      if (allPassenger.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No buses found for this operator",
        });
      }

      res.status(200).json({ success: true, data: allPassenger });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching buses",
        error: error.message,
      });
    }
  }
);

module.exports = readRoute;
