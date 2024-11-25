const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name should be at least 3 character longs "],
  },
  email: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address.",
    ],
  },
  phone: {
    type: String,
    required: true,
    match: [
      /^\d{10}$/,
      "No other characters allowed, phone must be 10 digits.",
    ],
  },

  age: {
    type: Number,
    required: true,
    min: [18, "Age must be at least 18."],
    max: [65, "Age must be less than or equal to 65."],
  },
});

const contactModel = mongoose.model("contact", contactSchema);

module.exports = contactModel;
