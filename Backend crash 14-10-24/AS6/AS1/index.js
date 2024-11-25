const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const inputValidation = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  if (typeof ID !== "number" || typeof Rating !== "number") {
    return res
      .status(400)
      .json(
        "bad request.same data is not incorrect,{ID| Rating|}is  not a number"
      );
  }
  if (
    typeof Name !== "string" ||
    typeof Description !== "string" ||
    typeof Genre !== "string"
  ) {
    return res
      .status(400)
      .json(
        "bad request.same data is not incorrect,{Name| Description| Genre|}is  not a string"
      );
  }
  if (!Array.isArray(Cast) && !Cast.every((line) => typeof line === "string")) {
    return res
      .status(400)
      .json(
        `bad request .some data is not incorrect.{Cost}is not array of string`
      );
  }
  next();
};

app.post("/", inputValidation, (req, res) => {
  res.status(200).json("data received");
});

app.listen(PORT, () => {
  console.log(`server is running on${PORT}`);
});
