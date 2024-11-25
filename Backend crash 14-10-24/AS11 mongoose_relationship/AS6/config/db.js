const mongoose = require("mongoose");
const dotenv=require("dotenv").config()
const url = process.env.MONGO_URL;
// console.log(url)

const connectDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("database is connect");
  } catch (error) {
    console.log(`internal sever error while connecting database${error}`);
  }
};

module.exports = connectDatabase;
