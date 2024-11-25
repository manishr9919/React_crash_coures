const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    title: { type: String, require: true },
    year: { type: Number, require: true },
    rating: { type: Number, require: true },
  },
  { versionKey: false }
);

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;
