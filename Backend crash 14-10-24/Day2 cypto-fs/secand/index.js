const crypto = require('crypto');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const os = require('os');

// Function to encrypt a string
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const key = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
        key: key.toString('hex')
    };
}

// Function to generate a random UUID
function generateUUID() {
    return uuidv4();
}

// Function to read a large file using normal method
function readFileNormal(filePath) {
    console.time('Normal Read Time');
    const data = fs.readFileSync(filePath, 'utf-8');
    console.timeEnd('Normal Read Time');
    return data;
}

// Function to read a large file using streams
function readFileStream(filePath) {
    console.time('Stream Read Time');
    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
    });

    readStream.on('end', () => {
        console.timeEnd('Stream Read Time');
    });

    readStream.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
}

// Function to print system details
function printSystemDetails() {
    console.log('System Information:');
    console.log(`OS Type: ${os.type()}`);
    console.log(`OS Platform: ${os.platform()}`);
    console.log(`OS Release: ${os.release()}`);
    console.log(`CPU Architecture: ${os.arch()}`);
    console.log(`Total Memory: ${os.totalmem()} bytes`);
    console.log(`Free Memory: ${os.freemem()} bytes`);
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`User Info: `, os.userInfo());
}

// Main function to handle command line arguments
function main() {
    const operation = process.argv[2];

    switch (operation) {
        case 'encrypt':
            const textToEncrypt = process.argv[3];
            const encryptedResult = encrypt(textToEncrypt);
            console.log('Encrypted:', encryptedResult);
            break;

        case 'uuid':
            const randomUUID = generateUUID();
            console.log('Random UUID:', randomUUID);
            break;

        case 'read-normal':
            const normalFilePath = process.argv[3];
            readFileNormal(normalFilePath);
            break;

        case 'read-stream':
            const streamFilePath = process.argv[3];
            readFileStream(streamFilePath);
            break;

        case 'system-info':
            printSystemDetails();
            break;

        default:
            console.log(`Invalid operation '${operation}'`);
            console.log(`Valid operations: encrypt, uuid, read-normal <filePath>, read-stream <filePath>, system-info`);
    }
}

// Run the main function
main();
