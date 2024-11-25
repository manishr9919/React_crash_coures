const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    descriptions: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
