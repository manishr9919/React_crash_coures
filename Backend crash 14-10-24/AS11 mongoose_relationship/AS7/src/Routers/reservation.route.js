const express = require("express");
const reservationRoute = express.Router();
const ReservationMOdel = require("../model/reservation.model");
const BusModel = require("../model/bus.model");
const PassengerModel = require("../model/passenger.model");
// create a endpoint for passenger
reservationRoute.post("/addReservation", async (req, res) => {
  // abstract data from req,body
  const { bus, passenger, seat_number, reservation_date } = req.body;
  try {
    //find specific bus
    const specificBus = await BusModel.findOne({ bus_number: bus });
    // if operator is not find the return that operator is not found
    if (!specificBus) {
      return res.status(404).send("operator is not found ");
    }
    //find specific route
    const specificPassenger = await PassengerModel.findOne({ name: passenger });
    // if route is not find the return that route is not found
    if (!specificPassenger) {
      return res.status(400).send("passenger is not found ");
    }
    const newReservation = await new ReservationMOdel({
      bus: specificBus._id,
      passenger: specificPassenger._id,
      seat_number,
      reservation_date,
    });
    await newReservation.save();
    console.log(newReservation);
    //In specific bus assigned reservations
    await specificBus.reservations.push(newReservation._id);
    specificBus.save();
    //In specific passenger assigned reservations
    await specificPassenger.reservations.push(newReservation._id);
    specificPassenger.save();

    res
      .status(201)
      .json({
        message: "reservation is successful in specific bus",
        newReservation,
      });
  } catch (error) {
    res.status(500).json({
      message: "error occur while reservation",
      error: error.message,
    });
  }
});

module.exports = reservationRoute;
