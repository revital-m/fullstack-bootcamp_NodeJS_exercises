const fs = require('fs');

//? 1. Create a new txt file using the same fs module method we have learned before.
// fs.writeFileSync('newTextFile.txt', 'Q-1: My new text file.');

//? 2. Create a copy of the newly created txt file using a method from the fs module.
// fs.copyFileSync('./newTextFile.txt', 'myCopyFile.txt');

//? 3. Rename one of the files using a method from the fs module.
// fs.renameSync('newTextFile.txt', 'changeName.txt');

//? 4. Get a list of all the file names of the current directory using a method from the fs module.
const myFolder = '../2_1_file_system/';
fs.readdirSync(myFolder).forEach((file) => {
  console.log(file);
});

//? 5. Find out and implement another method for the fs module.
// fs.appendFileSync('myCopyFile.txt', '\nadding data');