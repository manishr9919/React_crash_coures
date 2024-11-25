const mongoose = require("mongoose");
 require("dotenv").config()
const url = process.env.URL;

const connection = async () => {
  try {
    const Database = await mongoose.connect(url);
    console.log("database is connected ");
  } catch (error) {
    console.log("error occur while connect to database");
  }
};
module.exports = connection;
