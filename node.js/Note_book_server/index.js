require('dotenv').config()
// console.log(process.env) 
const express=require("express")
const connection=require("./config/db")
const userRouter=require("./Router/userRoute")
 const PORT=3000
 const app= express()
 app.use(express.json())
 app.use("/user" ,userRouter)

 app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connection is stablish and")
        console.log(`server started on port no ${PORT}`)
        
    } catch (error) {
        console.log("error while connecting server",error);
        
        
    }

 })
