const fs = require("fs");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv.slice(4).join(" ");

if (!operation) {
  console.error("please provide nessesry opretion like (read delete rename ).");
  process.exit(1);
}

if (!file && operation !== "list") {
  console.error(
    "Error: No file specified. Please provide a file for the operation."
  );
  process.exit(1); // Exit the script with a non-zero status code to indicate an error
}

switch (operation) {
  case "read":
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(`error reading file: ${err}`);
      } else {
        console.log(data);
      }
    });

    break;
  case "delete":
    fs.unlink(file, (err) => {
      if (err) {
        console.log(`file is not deleted: something error:${err}`);
      } else {
        console.log(`deleting is successfully:${file}`);
      }
    });
    break;
  case "create":
    fs.writeFile(file, content, (err) => {
      if (err) {
        console.log(` No create content :${err}`);
      } else {
        console.log(`creation file is successfully ${file}`);
      }
    });
    break;

  case "append":
    fs.appendFile(file, content + "\n", (err) => {
      if (err) {
        console.log(`${err}`);
      } else {
        console.log(`Append the file successfully with content:${file}`);
      }
    });
    break;
  case "rename":
    const newFileName = content;

    fs.rename(file, newFileName, (err) => {
      if (err) {
        console.error(`error renaming file : ${err}`);
      } else {
        console.log(`file ${file}  renamed ${newFileName}`);
      }
    });
    break;
    case "list":
        fs.readdir(file||'.',(err,file)=>{
            if(err){
                console.error(`error list file ${err}`)
            }else{
                file.forEach(file=>{
                    console.log(file)
                })

            }
        })
        break;

  default:
    console.log(`invalid operation:${operation}`);

    break;
}
