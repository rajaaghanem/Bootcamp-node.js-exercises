const fs = require("fs");

//** sync 
try{
  fs.writeFileSync("notes.txt", "My first node.js file");
  fs.copyFileSync("notes.txt", "copied_notes.txt", callback);
}catch(e){
  console.log(e.massege);
}

//Copy file function

function callback(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}


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


//**async:

fs.writeFile("notes2.txt", "My first Async node.js file", (error)=>{
  if(error) console.log(error);
});

fs.copyFile("notes2.txt", "copied_notes2.txt", (error)=>{
  if(error) console.log(error);
});