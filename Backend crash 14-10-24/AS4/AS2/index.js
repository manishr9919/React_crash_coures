/*1: install all dependency
  express
  nodemon
  fs module 
  filePathe*/

const express = require("express");

const fs = require("fs");
const app = express();
const path = require("path");
const filePath = path.join(__dirname, "/db.json");

/*after we need make function for reading data from db.json
and write data in db.json*/
// read the data from data base
const readDataFromDataBase = () => {
  let data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
  return JSON.parse(data);
};
// readDataFromDataBase();

//write the data in database
const writeDataInDataBase = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.use(express.json());

// write the Route for get all todos
app.get("/todo", (req, res) => {
  const data = readDataFromDataBase();
  res.status(200).json(data.todos);
});

app.post("/todo", (req, res) => {
  const { task, status } = req.body;
  if (!task || typeof status !== "boolean") {
    return res.status(400).json({ massage: "invalid input" });
  }
  //all data is valid proceed with function
  let data = readDataFromDataBase();
  //create the todo id base on last index
  let newID = data.todos.length ? data.todos[data.todos.length - 1].id + 1 : 1;
  //make the new todo obj
  let newTodo = { id: newID, task, status };
  //update the todo array  with new todo
  data.todos.push(newTodo);
  //write the updated array in databse
  writeDataInDataBase(data);
  res.status(200).json(newTodo);
});

app.put("/todo/even", (req, res) => {
  const data = readDataFromDataBase();
  const UpdateTodo = data.todos.map((todo) => {
    if (todo.id % 2 == 0 && !todo.status) {
      todo.status = true;
    }
    return todo;
  });
  data.todos = UpdateTodo;
  writeDataInDataBase(data);
  res.status(200).json({ massage: "data is updated in database" });
});

app.delete("/delete", (req, res) => {
  let data = readDataFromDataBase();
  data.todos = data.todos.filter((todo) => {
    return !todo.status;
  });
  writeDataInDataBase(data);
  res
    .status(200)
    .json({ massage: "data is successfully deleted which id is true" });
});

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
