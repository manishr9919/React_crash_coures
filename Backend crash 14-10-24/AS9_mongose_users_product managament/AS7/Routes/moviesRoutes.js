const express = require("express");
const moviesRoute = express.Router();
const MovieModel = require("../moviesSchema/moviesModel");

// POST: Add new movie
moviesRoute.post("/add_movies", async (req, res) => {
  const { name, title, descriptions, year, rating, price } = req.body;
  try {
    const addNewMovie = await new MovieModel({
      name,
      title,
      descriptions,
      year,
      rating,
      price,
    });

    const saveMovie = await addNewMovie.save();
    res
      .status(201)
      .json({ message: "Movie is added successfully", saveMovie });
  } catch (error) {
    res.status(500).json({ message: "Error while creating movie", error });
  }
});

// GET: Get movies by query (name, title, rating, etc.)
moviesRoute.get("/getMovies", async (req, res) => {
  const { name, title, rating, sortBy, sortOrder, page = 1, limit = 10 } = req.query;
  const query = {};

  if (name) query.name = name;
  if (title) query.title = title;
  if (rating) query.rating = rating;

  let sortOptions = {};
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  } else {
    sortOptions = { year: 1 };
  }

  try {
    const movies = await MovieModel.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalMovies = await MovieModel.countDocuments(query);
    const totalPages = Math.ceil(totalMovies / limit);

    res.status(200).json({
      totalMovies,
      totalPages,
      currentPage: parseInt(page),
      movies,
    });
  } catch (error) {
    res.status(500).send(`Error while fetching data: ${error}`);
  }
});

// PUT: Update a movie by ID
moviesRoute.put("/updateMovie/:id", async (req, res) => {
  const { id } = req.params;
  const { name, title, descriptions, year, rating, price } = req.body;

  try {
    const updatedMovie = await MovieModel.findByIdAndUpdate(
      id,
      { name, title, descriptions, year, rating, price },
      { new: true } // This option returns the updated document.
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({
      message: "Movie updated successfully",
      updatedMovie,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while updating movie", error });
  }
});

// DELETE: Delete a movie by ID
moviesRoute.delete("/deleteMovie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await MovieModel.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({
      message: "Movie deleted successfully",
      deletedMovie,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while deleting movie", error });
  }
});

module.exports = moviesRoute;
