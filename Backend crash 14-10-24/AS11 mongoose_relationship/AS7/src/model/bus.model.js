const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  bus_number: {
    type: String,
    required: true,
    unique: [true, "name must be unique"],
  },
  capacity: {
    type: Number,
    required: true,
  },
  operator: {
    type: [mongoose.Schema.ObjectId],
    ref: "Operator",
    required: [true, "operator must be required "],
  },
  route: {
    type: [mongoose.Schema.ObjectId],
    ref: "Route",
    required: [true, "route must be required "],
  },
  reservations: {
    type: [mongoose.Schema.ObjectId],
    ref: "Reservation",
    required: [true, "reservation must be required "],
  },
});
const BusModel = mongoose.model("Bus", busSchema);
module.exports = BusModel;
