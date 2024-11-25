const express = require("express");
const cloudinary = require("cloudinary").v2;
const app = express();
const PORT = 3001;
const path = require("path");
const multer = require("multer");

const htmlForm = path.join(__dirname, "index.html");
const upload = multer({ dest: "uploads" });

cloudinary.config({
  cloud_name: "dio7mekox",
  api_key: "857664933271638",
  api_secret: "IZBXbL9WYxQ7hLkXZDMwACndGNM",
});

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(htmlForm);
});

app.post("/upload", upload.single("avatar"), async (req, res, next) => {
  // Upload to choudinary
  try {
    const fileUpload = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({
      massage: "File  uploaded successfully  ",
      fileUrl: fileUpload.secure_url,
    });
    console.log(fileUpload.secure_url);
    console.log(fileUpload);
  } catch (error) {
    console.log("uploading error", error);
    res.status(400).json({ massage: "no file upload" });
  }
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
