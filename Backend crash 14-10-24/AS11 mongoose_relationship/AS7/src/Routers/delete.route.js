const express = require("express");
const BusModel = require("../model/bus.model"); // Bus model
const OperatorModel = require("../model/operator.model"); // Operator model
const RouteModel = require("../model/route.model"); // Route model
const ReservationModel = require("../model/reservation.model");

const deleteRoute = express.Router();
//1: remove bus from operator or busses array
deleteRoute.delete("/removeBus/:busId", async (req, res) => {
  const { busId } = req.params;

  try {
    // Step 1: Find the bus to remove
    const bus = await BusModel.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Step 2: Remove the bus from the operator's list
    // Assuming 'operator' field in BusModel is an array of operator IDs
    const operators = bus.operator;
    for (let operatorId of operators) {
      await OperatorModel.findByIdAndUpdate(
        operatorId,
        { $pull: { buses: busId } }, // Remove the bus from the operator's buses list
        { new: true }
      );
    }

    // Step 3: Remove the bus from the route's list of assigned buses
    const routes = bus.route;
    for (let routeId of routes) {
      await RouteModel.findByIdAndUpdate(
        routeId,
        { $pull: { buses: busId } }, // Remove the bus from the route's buses list
        { new: true }
      );
    }

    // Step 4: Finally, delete the bus from the bus collection
    await BusModel.findByIdAndDelete(busId);

    // Success response
    res.status(200).json({
      message: "Bus successfully removed from operator and route",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error removing bus",
      error: error.message,
    });
  }
});

//2: delete a route from associated busses

deleteRoute.delete("/deleteRoute/:routeId", async (req, res) => {
  const { routeId } = req.params;

  try {
    // Step 1: Find the route to delete
    const route = await RouteModel.findById(routeId);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    // Step 2: Handle buses associated with the route
    const buses = route.buses; // Assuming 'buses' is an array of bus IDs in the route schema

    // If you want to remove buses entirely from the system:
    for (let busId of buses) {
      // Option 1: Reassign the buses to another route (if needed)
      // You can either remove the route reference from the buses or assign them to a new route.
      // Example: Reassign buses to a default route
      await BusModel.findByIdAndUpdate(busId, {
        $pull: { route: routeId }, // Remove the current route from the bus
        $push: { route: "newDefaultRouteId" }, // Optionally, add to a new route
      });

      // Option 2: Remove buses from the route (without reassignment)
      // await BusModel.findByIdAndUpdate(busId, {
      //   $pull: { route: routeId }, // Remove the current route from the bus
      // });
    }

    // Step 3: Delete the route from the database
    await RouteModel.findByIdAndDelete(routeId);

    // Step 4: Success response
    res.status(200).json({
      message: "Route successfully deleted, buses reassigned or removed",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting route",
      error: error.message,
    });
  }
});
//3: cancel the reservation

deleteRoute.delete("/cancelReservation/:reservationId", async (req, res) => {
  const { reservationId } = req.params;

  try {
    // Step 1: Find the reservation by its ID
    const reservation = await ReservationModel.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    // Step 2: Get the bus and seat number from the reservation
    const { bus: busId, seat_number } = reservation;

    // Step 3: Update the bus to make the seat available again
    const updatedBus = await BusModel.findByIdAndUpdate(
      busId,
      {
        $set: { seat_number: null }, // Mark the seat as available
      },
      { new: true }
    );

    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Step 4: Delete the reservation
    await ReservationModel.findByIdAndDelete(reservationId);

    // Step 5: Success response
    res.status(200).json({
      message: "Reservation successfully canceled, seat is now available",
      data: updatedBus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error canceling reservation",
      error: error.message,
    });
  }
});

//4: 

module.exports = deleteRoute;
