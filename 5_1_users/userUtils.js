import chalk from "chalk";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

//* Add a new user to the array of users.
export const addUser = (name, email) => {
  const usersArr = loadUsers();
  const duplicatUser = usersArr.find((user) => user.email === email);

  if (!duplicatUser) {
    const newUser = {
      name: name,
      email: email,
      id: uuidv4(),
    };
    usersArr.push(newUser);
    saveUsers(usersArr);
    console.log(chalk.bgGreen.black("User was successfully added!"));
  } else {
    console.log(chalk.bgRed.black("User already exists!"));
  }
};

//* Read a user from the array of users.
export const readUser = (id) => {
  const usersArr = loadUsers();
  const chossenUser = usersArr.find((user) => user.id === id);

  if (chossenUser) {
    console.log(chalk.bgGreen.black("Your User is:"));
    console.log(
      `\tName: ${chossenUser.name}\n\tEmail: ${chossenUser.email}\n\tID: ${chossenUser.id}\n`
    );
  } else {
    console.log(chalk.bgRed.black("User not found!"));
  }
};

//* Delete the note from the array of notes.
export const deleteUser = (id) => {
  const usersArr = loadUsers();
  const filteredUserArr = usersArr.find((user) => user.id !== id);

  if (!filteredUserArr) {
    saveUsers([]);
    console.log(chalk.bgGreen.black("User was successfully deleted!"));
  }
  else if (filteredUserArr.length !== usersArr.length) {
    saveUsers(filteredUserArr);
    console.log(chalk.bgGreen.black("User was successfully deleted!"));
  } else {
    console.log(chalk.bgRed.black("User not found!"));
  }
};

//* List all the notes from the array of notes.
export const updateUser = (id, name, email) => {
  const usersArr = loadUsers();
  const chosenUser = usersArr.find((user) => user.id === id);

  if (chosenUser) {
    chosenUser.name = name || chosenUser.name;
    chosenUser.email = email || chosenUser.email;

    saveUsers(usersArr);
    console.log(chalk.bgGreen.black("User was successfully update!"));
  } else {
    console.log(chalk.bgRed.black("User not found!"));
  }
};

//* Save the array of users in users.json
const saveUsers = (usersArr) => {
  const bookJSON = JSON.stringify(usersArr);
  fs.writeFileSync("users.json", bookJSON);
};

//* Load the array of users from users.json and parse them into JS.
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    const parseData = JSON.parse(dataJSON);
    return parseData;
  } catch (error) {
    return [];
  }
};
