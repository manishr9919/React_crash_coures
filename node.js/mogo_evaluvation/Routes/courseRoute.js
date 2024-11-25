const express = require("express");
const courseModel = require("../model/course");
const courseRouter = express.Router();

courseRouter.post("/create_course", async (req, res) => {
  const { id, title, category, difficulty, description } = req.body;
  try {
    const course = new courseModel({
      id,
      title,
      category,
      difficulty,
      description,
    });
    await course.save();
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send("data is not save ");
  }
});

module.exports = courseRouter;
