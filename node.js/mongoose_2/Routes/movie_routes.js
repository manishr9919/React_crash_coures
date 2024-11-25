const express = require("express");
const movie = require("../Movie_Schema_model/movie_schema_model");

const movieRoute = express.Router(); 
//  =========================post movie=================================

movieRoute.post("/create_movie", async (req, res) => {
  const { name, price, title, rating, year } = req.body;
  try {
    const saveMovie = new movie({ name, price, title, rating, year });
    await saveMovie.save();
    res.status(200).send(`movie saved ${saveMovie}`);
  } catch (error) {
    res.status(500).send("movie not saved ");
    console.log(`error saving movie ${error}`);
  }
});
// ==================================Get all movie==== and pagination ===============
movieRoute.get("/getAll_movie", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const allMovie = await movie
      .find()
      .limit(parseInt(limit))
      .skip(parseInt(page - 1) * parseInt(limit));
    const totalMovie = await movie.countDocuments();
    res.status(200).json({
      totalPages: Math.ceil(totalMovie / limit),
      currentPage: page,
      movies: allMovie,
    });
  } catch (error) {
    res.status(500).send("movie not find");
    console.log(`error find  movie ${error}`);
  }
});
//  ============================filter by tile and rating ===================
movieRoute.get("/filter_movie", async (req, res) => {
  const { title, rating } = req.query;

  try {
    const matchStage = {
      $match: {
        ...(title ? { title: { $regex: title, $options: "i" } } : {}),
        ...(rating ? { rating: { $gte: parseFloat(rating) } } : {}),
      },
    };

    const filterMovie = await movie.aggregate([
      matchStage,
      { $project: { title: 1, name: 1, price: 1, rating: 1 } },
    ]);
    res.status(200).send(filterMovie);
  } catch (error) {
    res.status(500).send("movie not saved ");
    console.log(`error find  movie ${error}`);
  }
});

// ============================sort query===========================================

movieRoute.get("/sort_movie", async (req, res) => {
  const { sortByField, sortOrder } = req.query;

  try {
    const sortQuery = {};
    if (sortByField) {
      sortQuery[sortByField] = sortOrder === "desc" ? -1 : 1;
    }
    const sortMovie = await movie.find().sort(sortQuery);
    res.status(200).send(sortMovie);
  } catch (error) {
    res.status(500).send("movie not sort ");
    console.log(`error sorting  movie ${error}`);
  }
});

// =========================================update movie=====================================
movieRoute.patch("/update_movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const UpdateMovie = await movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!UpdateMovie) {
      return res.status(400).send("movie is not found ");
    }
    res.status(200).send("movie is updated");
  } catch (error) {
    console.log("error update movie ");
    res.status(500).send({ message: "error update movie", error: message });
  }

  //  Delete the Product by Id
});
movieRoute.delete("/delete_movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Product.findByIdAndDelete(id);
    if (!deleteMovie) {
      return res.status(400).send("movie is not found ");
    }
    res.status(200).send("movie deleted successfully");
  } catch (error) {
    console.log("error update movie ");
    res.status(500).send({ message: "error deleted movie", error: message });
  }
});

module.exports = movieRoute;
