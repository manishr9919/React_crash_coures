const express = require("express");

const app = express();
const fs = require("fs");
app.use(express.json());

const readtodos = () => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  return data.todos;
};

const writeTodos = (todos) => {
  fs.writeFileSync("./db.json", JSON.stringify({ todos }), "utf-8");
};

app.get("/todos", (req, res) => {
  const todos = readtodos();
  res.send(todos);
});
app.post("/todos", (req, res) => {
  const todos = readtodos();
  const newtodos = { id:todos.length+1,...req.body};
  todos.push(newtodos);
  writeTodos(todos);
  res.send("post is successfully");
});

app.put('/todos/update-status', (req, res) => {
  let todos = readTodos();
  todos = todos.map(todo => {
    if (todo.id % 2 === 0 && todo.status === false) {
      return { ...todo, status: true };
    }
    return todo;
  });
  writeTodos(todos);
  res.json(todos);
});

// Delete all todos with status true
app.delete('/todos', (req, res) => {
  let todos = readTodos();
  todos = todos.filter(todo => !todo.status);
  writeTodos(todos);
  res.status(204).send();
});


app.listen(30002, () => {
  console.log("server is started ");
});
