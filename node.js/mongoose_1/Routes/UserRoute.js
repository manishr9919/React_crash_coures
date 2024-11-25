const express = require("express");
const User = require("../model/UserModel");

const UserRoute = express.Router();
//  post the user data is in user endpoint

UserRoute.post("/create_user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send("user is already present ");
    }
    const newUser = new User({ name, email, password });
    await newUser.save(); // Save the user instance to the database
    res.status(201).send("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error); // Log the error for debugging
    res.status(500).send("Error adding user");
  }
});
// create the user

UserRoute.get("/find_users", async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).send(Users);
  } catch (error) {
    console.log("error Fetching Users ");
    res.status(500).send({ message: "error fetching users", error: message });
  }
});
//   Update the user
UserRoute.patch("/update_users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const UpdateUsers = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!UpdateUsers) {
      return res.status(400).send("User is not found ");
    }
    res.status(200).send("user is updated");
  } catch (error) {
    console.log("error update Users ");
    res.status(500).send({ message: "error update users", error: message });
  }

  //  Delete the user by Id
});
UserRoute.delete("/delete_users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUsers = await User.findByIdAndDelete({ _id: id });
    if (!deleteUsers) {
      return res.status(400).send("User is not found ");
    }
    res.status(200).send("user deleted successfully");
  } catch (error) {
    console.log("error update Users ");
    res.status(500).send({ message: "error deleted users", error: message });
  }
});

module.exports=UserRoute