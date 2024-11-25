// Importing required modules
const crypto = require('crypto');

// Function to perform addition
function addition(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

// Function to perform subtraction
function subtraction(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

// Function to perform multiplication
function multiplication(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

// Function to perform division
function division(num1, num2) {
    // if (parseFloat(num2) === 0) {
    //     return "Cannot divide by zero";
    // }
    return parseFloat(num1) / parseFloat(num2);
}

// Function to perform sine
function sine(num) {
    return Math.sin(parseFloat(num));
}

// Function to perform cosine
function cosine(num) {
    return Math.cos(parseFloat(num));
}

// Function to perform tangent
function tangent(num) {
    return Math.tan(parseFloat(num));
}

// Function to generate random number
function generateRandomNumber(length) {
    if (!length) {
        return "Provide length for random number generation.";
    }
    const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
    const randomNumber = parseInt(randomBytes.toString('hex'), 16);
    return randomNumber.toString().slice(0, length);
}

// Main function to perform calculations based on command-line arguments
function calculator(operation, ...args) {
    switch (operation) {
        case 'add':
            return addition(...args);
        case 'sub':
            return subtraction(...args);
        case 'mult':
            return multiplication(...args);
        case 'div':
            return division(...args);
        case 'sin':
            return sine(...args);
        case 'cos':
            return cosine(...args);
        case 'tan':
            return tangent(...args);
        case 'random':
            return generateRandomNumber(...args);
        default:
            return "Invalid operation";
    }
}

// Retrieving command-line arguments
const [, , operation, ...args] = process.argv;

// Calling the calculator function with provided arguments
const result = calculator(operation, ...args);

// Outputting the result
console.log(result);
