const express = require("express");
const updateRoute = express.Router();
const OperatorModel = require("../model/operator.model");
const RouteModel = require("../model/route.model");
const busModel = require("../model/bus.model");
const ReservationModel = require("../model/reservation.model");
//1:   update the operator
updateRoute.patch("/updateOperatorDetail/:operatorId", async (req, res) => {
  const { operatorId } = req.params; // Extract the operatorId from the route params
  const { contact_info } = req.body; // Extract the updated contact_info from the request body

  try {
    // Perform the update
    const updatedOperator = await OperatorModel.findByIdAndUpdate(
      operatorId,
      { contact_info }, // Update the contact_info field
      { new: true } // Return the updated document
    );

    // If no operator is found
    if (!updatedOperator) {
      return res
        .status(404)
        .json({ message: "Operator not found with the provided ID" });
    }

    // Success response
    res.status(200).json({
      message: "Operator details successfully updated",
      data: updatedOperator,
    });
  } catch (error) {
    // Error handling
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});
//2:   update the route

updateRoute.patch("/updateOperatorDetail/:routeId", async (req, res) => {
  const { routeId } = req.params; // Extract the operatorId from the route params
  const { start_location, end_location } = req.body; // Extract the updated start_location &end_location from the request body

  try {
    // Perform the update
    const updatedRoute = await RouteModel.findByIdAndUpdate(
      routeId,
      { start_location, end_location } // Return the updated document
    );

    // If no Route is found
    if (!updatedRoute) {
      return res
        .status(404)
        .json({ message: "Route not found with the provided ID" });
    }

    // Success response
    res.status(200).json({
      message: "Route details successfully updated",
      data: updatedRoute,
    });
  } catch (error) {
    // Error handling
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

//3:   update the bus

updateRoute.patch("/updateBusDetail/:busId", async (req, res) => {
  const { busId } = req.params; // Extract the operatorId from the route params
  const { capacity, route } = req.body; // Extract the updated start_location &end_location from the request body

  try {
    // Perform the update
    const updatedBus = await busModel.findByIdAndUpdate(
      busId,
      { capacity, route }, // Return the updated document
      { new: true }
    );

    // If no Route is found
    if (!updatedBus) {
      return res
        .status(404)
        .json({ message: "Route not found with the provided ID" });
    }

    // Success response
    res.status(200).json({
      message: "Route details successfully updated",
      data: updatedBus,
    });
  } catch (error) {
    // Error handling
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

//4:   update the reservation_seat

updateRoute.patch(
  "/updateReservationDetail/:reservationId",
  async (req, res) => {
    const { reservationId } = req.params; // Extract the operatorId from the route params
    const data = req.body; // Extract the updated start_location &end_location from the request body

    try {
      // Perform the update
      const updateReservationSeat = await ReservationModel.findByIdAndUpdate(
        busId,
        data, // Return the updated document
        { new: true }
      );

      // If no Route is found
      if (!updateReservationSeat) {
        return res
          .status(404)
          .json({ message: "Reservation not found with the provided ID" });
      }

      // Success response
      res.status(200).json({
        message: "seat no is  updated",
        data: updateReservationSeat,
      });
    } catch (error) {
      // Error handling
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
);

module.exports = updateRoute;
