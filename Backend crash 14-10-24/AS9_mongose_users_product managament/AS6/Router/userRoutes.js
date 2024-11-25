const UserModel = require("../schema_model/user_model");
const express = require("express");
const userRoutes = express.Router();

userRoutes.post("/addUser", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }
    const newUser = new UserModel({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .send({ message: "User created successfully", user: savedUser });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Error saving user", details: error.message });
  }
});
userRoutes.get("/getAllUser", async (req, res) => {
  try {
    const AllUser = await UserModel.find();
    res.status(200).json({ massage: "user get successfully", user: AllUser });
  } catch (error) {
    console.log(`error while fetching data ${error}`);
  }
});
userRoutes.patch("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ massage: "user updated successfully" });

    console.log(updateUser);
  } catch (error) {
    console.log(`error while updating the user`);
  }
});
userRoutes.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser =  await UserModel.findByIdAndDelete(id);
  res.status(200).json({ massage: "user deleted successfully" });
});

module.exports = userRoutes;
