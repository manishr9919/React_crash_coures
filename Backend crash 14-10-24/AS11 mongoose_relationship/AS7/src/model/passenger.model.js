const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: [true, "name must be unique"] },
  email: {
    type: String,
    required: true,
    unique: [true, "name must be unique"],
  },
  phone: { type: String },

  reservations: {
    type: [mongoose.Schema.ObjectId],
    ref: "Reservation",
    required: [true, "reservation must be required "],
  },
});

const passengerModel = mongoose.model("Passenger", passengerSchema);
module.exports = passengerModel;
