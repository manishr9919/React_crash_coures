const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.ObjectId, ref: "Bus", required: true },
  passenger: {
    type: mongoose.Schema.ObjectId,
    ref: "Passenger",
    required: true,
  },
  seat_number: { type: Number, required: true },
  reservation_date: { type: Date, default: Date },
});

const reservationModel = mongoose.model("Reservation", reservationSchema);
module.exports = reservationModel;
