const fs = require("fs");

fs.writeFileSync("notes.txt", "My first node.js file");

//Copy file function

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}
fs.copyFile("notes.txt", "copied_notes.txt", callback);

//Rename file function

fs.rename("copied_notes.txt", "newName_copied_notes.txt", (err) => {
  if (err) throw err;
  console.log("Rename complete!");
});

//Get a list of all the file names of the current directory

const testFolder = '../2.1-file_system/';
fs.readdirSync(testFolder).forEach((file) => {
  console.log(file);
});

// append new data in a file
fs.appendFileSync('notes.txt', ' adding data');