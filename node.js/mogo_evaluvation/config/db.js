// const mongoose = require("mongoose");
// const url="mongodb://127.0.0.1:27017/course_management"
// const connection = mongoose.connect(url);

// module.exports = connection;

const mongoose = require("mongoose");
const url = " mongodb://127.0.0.1:27017/course_management";

const connection = async() => {
  try {
    const connection =   await mongoose.connect(url);

    console.log("connected to database");
  } catch (error) {
    console.log(`error to connecting to database ${error}`);
  }
};
module.exports = connection;
