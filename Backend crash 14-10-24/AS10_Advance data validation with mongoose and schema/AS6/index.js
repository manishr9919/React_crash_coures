const express=require("express")
const connection=require("./config/db")
const Routers = require("./Routers/product.routes")
const PORT=process.env.PORT
const app=express()

app.use(express.json())
app.use("/product",Routers)

app.listen(PORT,async()=>{
    await connection()
    console.log(`server is running on port${PORT}`)

})