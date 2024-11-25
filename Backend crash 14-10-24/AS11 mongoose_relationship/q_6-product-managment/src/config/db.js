const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
const DB_NAME = "product_managment"
const connectToDB = ()=>{
     const connection = mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
     return connection
}


module.exports = connectToDB