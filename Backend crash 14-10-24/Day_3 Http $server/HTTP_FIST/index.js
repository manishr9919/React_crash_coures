const http = require("http"); // Import the http module
const PORT = 8080;
let path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Welcome to home page" }));
  } else if (req.url === "/aboutus" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html"); // Correct header format
    res.statusCode = 200;
    res.end(`
            <h3>Welcome to the About Us page</h3>
            
           <a href="https://masaischool.com/" target="_blank">Contact Masai</a>

        `); // Return HTML as a string
  } else if (req.url === "/index" && req.method === "GET") {
    let filePath = path.join(__dirname, "index.js");
    const readFile = fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(`err occurs while reading the file ${err} `);
      } else {
        res.setHeader("Content-Type", "application/javascript");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.end(
      `<h1>404 not found </h1>
      <p>The page you are looking for does not exist.</p>`
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
