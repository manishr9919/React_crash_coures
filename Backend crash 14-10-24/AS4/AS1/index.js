const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Express server !");
});

app.get("/about",(req,res)=>{
    res.status(200).send("This is simple web server built using Express")
})
app.get("/contact",(req,res)=>{
    res.status(200).json({email:"studet@example.cpm",
        phone:"123-456-7890"
    })

})
app.get("/random",(req,res)=>{
    try {
        let randomNumber=Math.floor(Math.random()*100)+1
        res.status(200).json({randomNum:randomNumber})
        
    } catch (error) {
        res.status(500).json({massage:"An error  occurred  while generating the Number"})
        
    }

})
app.use((req,res)=>{
    res.status(404).json({massage:"404 page not founds test your server"})

})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT} `);
});
