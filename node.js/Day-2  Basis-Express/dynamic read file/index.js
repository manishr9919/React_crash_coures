const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  fs.readdir("./", (err, files) => {
    if (err) {
      res.status(500).send("Error reading directory");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    files.forEach((file) => {
      res.write(`<a href="${file}"><li>${file}</li></a>`);
    });
    res.end();
  });
});

app.get("*", (req, res) => {
  const urlPath = `.${req.path}`;
  fs.stat(urlPath, (err, stats) => {
    if (err) {
      res.status(404).send("File or directory not found");
      return;
    }

    if (stats.isFile()) {
      fs.readFile(urlPath, "utf-8", (err, data) => {
        if (err) {
          res.status(500).send("Error reading file");
          return;
        }
        res.send(data);
      });
    } else if (stats.isDirectory()) {
      fs.readdir(urlPath, (err, files) => {
        if (err) {
          res.status(500).send("Error reading directory");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        files.forEach((file) => {
          res.write(`<a href="${req.path}/${file}"><li>${file}</li></a>`);
        });
        res.end();
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
