const express=require("express")
const connection=require("./config/config")
const movieRoute=require("./Routes/movie_routes")
const PORT=30001
const app=express();

app.use(express.json())
app.use("/movie" ,movieRoute)


app.listen(PORT,async()=>{
    try {
        await connection
        console.log("database is connected ")
        console.log("app started")
        
    } catch (error) {
        console.log(`error connecting to database ${error}`)
        
    }
   
})