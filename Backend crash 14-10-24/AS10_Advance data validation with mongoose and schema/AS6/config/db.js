const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const url=process.env.MONGO_URL

 
const connections=async()=>{
    try {
        await mongoose.connect(url)
        console.log("database is connected")
        
    } catch (error) {
        console.log(`error while connection to database${error}`)
        
    }
   
}
module.exports=connections
