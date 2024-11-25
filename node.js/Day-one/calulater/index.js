const { randomBytes } = require("node:crypto");
const input = process.argv;
// console.log(input);

const operation = input[2];
const a = +input[3];
const b = +input[4];

switch (operation) {
  case "add": {
    console.log(a + b);
    break;
  }
  case "sub": {
    console.log(a - b);
    break;
  }
  case "multi": {
    console.log(a *b);
    break;
  }
  case "div": {
    console.log(a / b);
    break;
  }
  case "sin": {
    console.log(Math.floor(Math.sin(a)));
    break;
  }
  case "cos": {
    console.log(Math.floor(Math.cos(a)));
    break;
  }
  case "tan": {
    console.log(Math.floor(Math.tan(a)));
    break;
  }

  case "random":{
    if (a) {
        randomBytes(a, (err, buf) => {
          if (err) err
            console.log(
              `${buf.length} bytes of random data: ${buf.toString("binary")}`,
            );
        });
        break
      }
      else{
        console.log("Provide length for random number generation.");
        break
      }
    }
      default : {
        console.log("Input Invalid")
      }
  }
  
  
