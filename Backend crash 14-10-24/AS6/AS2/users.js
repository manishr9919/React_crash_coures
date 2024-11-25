const express = require("express");
const router = express.Router();
let users = [];

// Create new user
router.post("/post", (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(200).json({ message: "User added successfully", user });
});

// Get all users
router.get("/get", (req, res) => {
  res.status(200).json(users);
});

// Update user by ID
router.put("/update/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  Object.assign(user, req.body);
  res.status(200).json({ message: "User updated successfully", user });
});

// Delete user by ID
router.delete("/delete/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });
  users.splice(userIndex, 1);
  res.status(200).json({ message: "User successfully deleted" });
});

module.exports = router;
