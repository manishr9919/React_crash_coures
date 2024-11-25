const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/mongoose_1";



const connection =  () => {
    try {
      const connection = mongoose.connect(url);
      
      console.log("connected to database");
    } catch (error) {
      console.log(`error to connecting to database ${error}`);
    }
  };
   module.exports= connection




