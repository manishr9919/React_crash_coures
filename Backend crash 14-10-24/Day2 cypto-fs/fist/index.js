const path = require("path");
const fs = require("fs");
const { unlink } = require("node:fs");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

const filepath = path.join(__dirname, file);

switch (operation) {
  case "read": {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        console.log(`error while reading data${err}`);
      } else {
        console.log(data);
      }
    });
    break;
  }

  case "delete": {
    fs.unlink(filepath, (err) => {
      if (err) throw err;
      console.log(`deleting file successful ${file}`);
    });

    break;
  }

  case "create": {
    fs.writeFile(filepath, content + "\n", (err) => {
      if (err) throw err;
      console.log(`file is creating successful${content}`);
    });
    break;
  }
  case "append": {
    fs.appendFile(filepath, content + "\n", "utf-8", (err) => {
      if (err) throw err;
      console.log(`data is appending inside${filepath}`);
    });
    break;
  }
  case "rename": {
    const newFileName = process.argv[4];
    fs.rename(filepath, path.join(__dirname, newFileName), (err) => {
      if (err) {
        console.log(`err while renaming the ${err.message}`);
      } else {
        console.log(`rename is successful ${newFileName}`);
      }
    });
    break;
  }
  case "list": {
    // List all files in the current directory
    fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.log(`Error reading directory: ${err.message}`);
      } else {
        console.log("Files in the directory:");
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
    break;
  }

  default:
    console.log(`Invalid operation '${operation}'`);
}
