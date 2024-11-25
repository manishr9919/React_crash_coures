const mongoose = require("mongoose");

const operatorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contact_info: { type: String },
  buses: {
    type: [mongoose.Schema.ObjectId],
    ref: "Bus",
  },
});
const operatorModel = mongoose.model("Operator", operatorSchema);
module.exports = operatorModel;
