const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const PORT = 8080;

const renderSignupFrom = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
        <html>
     <head>

        <title>signup from</title>  </head>

        <body>
             <form method="POST" action="/signup">
            <label>username: </label>
            <input type="text" name="username" required /><br/>
            <label>password :</label><input type="password" name="password" required /><br/>
            <button type="submit">signup</button>

            </form>
           
            </body>  
     </html>`);
  res.end();
};

const handleSignupFrom = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    let parseData = qs.parse(body);
    let { username, password } = parseData;

    fs.appendFile("text.txt", JSON.stringify(parseData) + "\n", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`error in saving data:${err.toString()}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`thank you for signup`);
      }
    });
  });
};

const displayAllUser = (res) => {
  fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`error while reading data:${err.toString()}`);
    } else {
      let userData = data
        .split("\n")
        .filter((line) => line)
        .map((line) => JSON.parse(line));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1> All User</h1><ul>`);
      userData.forEach((user) => {
        res.write(`<li>${user.username}</li>`);
      });
      res.write(`</ul>`);
      res.end();
    }
  });
};

const app = http.createServer((req, res) => {
  if (req.url === "/signup" && req.method === "GET") {
    renderSignupFrom(res);
  } else if (req.url === "/signup" && req.method === "POST") {
    handleSignupFrom(req, res);
  } else if (req.url === "/AllUser" && req.method === "GET") {
    displayAllUser(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write(`url is not found `);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}}`);
});
