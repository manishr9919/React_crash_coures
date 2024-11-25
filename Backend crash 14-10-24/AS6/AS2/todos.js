const express = require("express");
const router = express.Router();

// Initialize an empty array for todos
const todos = [];

// Create a new todo
router.post("/post", (req, res) => {
  const todo = { id: Date.now(), ...req.body }; // Create a new todo object with a unique id
  todos.push(todo); // Add the new todo to the array
  res.status(200).json({ message: "Created new todo", todo }); // Respond with success
});

// Get all todos
router.get("/get", (req, res) => {
  res.status(200).json(todos); // Respond with the array of todos
});

// Get todo by ID
router.get("/get/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id)); // Find the todo by ID
  if (!todo) {
    return res.status(404).json({ message: "Todo is not found" }); // Respond with 404 if not found
  }
  res.status(200).json({ message: "Got todo based on ID", todo }); // Respond with the found todo
});

// Update todo based on ID
router.put("/update/:id", (req, res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  ); // Find the index of the todo by ID
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo is not found" }); // Respond with 404 if not found
  }
  // Update the todo object with the new data
  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  res
    .status(200)
    .json({ message: "Todo updated successfully", todo: todos[todoIndex] }); // Respond with the updated todo
});

// Delete specific todo based on ID
router.delete("/delete/:id", (req, res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  ); // Find the index of the todo by ID
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo is not found" }); // Respond with 404 if not found
  }
  const deletedTodo = todos[todoIndex]; // Store the deleted todo for response
  todos.splice(todoIndex, 1); // Remove the todo from the array
  res.status(200).json({ message: "Todo is deleted", deletedTodo }); // Respond with a success message
});

module.exports = router;
