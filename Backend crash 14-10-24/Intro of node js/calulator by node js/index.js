let { randomBytes } = require("node:crypto");
let input = process.argv;

let [operation, num1, num2] = input.slice(2);

let a = parseFloat(num1);
let b = parseFloat(num2);

switch (operation) {
  case "add":
    {
      console.log(a + b);
    }
    break;
  case "subtract":
    {
      console.log(a - b);
    }
    break;
  case "multiply":
    {
      console.log(a * b);
    }
    break;
  case "divide":
    {
      if (b === 0) {
        console.log("number is not dive by zero");
      } else {
        console.log(a / b);
      }
    }
    break;
  case "sin": {
    console.log(Math.sin(a));
  }

  case "cos":
    {
      console.log(Math.cos(a));
    }
    break;
  case "tan":
    {
      console.log(Math.tan(a));
    }
    break;
  case "randomByte": {
    if (a) {
      randomBytes(a, (err, buf) => {
        if (err) err;
        console.log(
          `${buf.length} bytes of random data: ${buf.toString("binary")}`
        );
      });
      break;
    } else {
      console.log("Provide length for random number generation.");
      break;
    }
  }
  default: {
    console.log("Input Invalid");
  }
}
