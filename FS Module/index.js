const fs = require("fs");

// Step 1: Create a folder named 'shivansh'
fs.mkdirSync("shivansh");

// Step 2: Create a file in it named 'bio.txt' and add data into it.
fs.writeFileSync('shivansh/bio.txt', "My name is Shivansh Thapa");

// Step 3: Add more data into the file at the end of the existing data.
fs.appendFileSync('shivansh/bio.txt', "\nMy age is 24");

// Step 4: Read the data without getting the buffer data at first
const data = fs.readFileSync("shivansh/bio.txt", "utf-8");
console.log(data);

// Step 5: Rename the file name to 'mybio.txt'
fs.renameSync("shivansh/bio.txt", "shivansh/mybio.txt");

// Step 6: Delete both the file and the folder.
fs.unlinkSync("shivansh/mybio.txt");
fs.rmdirSync("shivansh");
