const express = require("express");

const server = express();
const PORT = 8080;

const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
});







server.listen(PORT, () => {
  console.log(`server is started  on ${PORT}`);
});
