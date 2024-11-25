const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  start_location: { type: String, required: true },
  end_location: { type: String, required: true },
  distance: { type: Number, required: [true, "distance must be required"] },
  buses: {
    type: [mongoose.Schema.ObjectId],
    ref: "Bus",
  },
});

const routeMOdel = mongoose.model("Route", routeSchema);
module.exports = routeMOdel;
