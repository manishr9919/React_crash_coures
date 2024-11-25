const express = require('express')
const app = express()
const multer  = require('multer')
const upload = multer()


app.post('/profile', upload.none(), function (req, res, next) {
    // req.body contains the text fields
    res.send("File Received...!!1")
  })

app.listen(8181, ()=>{
    console.log("server started")
})