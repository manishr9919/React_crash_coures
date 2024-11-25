const express = require("express");
const PORT = 8080;
const fs = require("fs");

const app = express();

app.use(express.json());

const dataValidation = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  const Validation = {
    ID: "number",
    Name: "string",
    Rating: "number",
    Description: "string",
    Genre: "string",
    Cast: "array of strings",
  };

  for (let key in Validation) {
    switch (key) {
      case "ID":
      case "Rating":
        if (typeof req.body[key] !== Validation[key]) {
          return res.status(400).send("bad request. some data is incorrect.");
        }
        break;
      case "Name":
      case "Description":
      case "Genre":
        if (typeof req.body[key] !== Validation[key]) {
          return res.status(400).send("bad request. some data is incorrect.");
        }
        break;
      case "Cast":
        if (!Array.isArray(req.body[key]) || !req.body[key].every((item) => typeof item === "string")) {
          return res.status(400).send("bad request. some data is incorrect.");
        }
        break;
      default:
        return res.status(400).send("bad request. some data is incorrect.");
    }
  }
  next();
};

app.post("/", dataValidation, (req, res) => {
  res.status(200).send("data received");
});

app.listen(PORT, () => {
  console.log(`app is started on ${PORT}`);
});
