import fs from "fs";
import { v4 as uuidv4 } from "uuid";

//add a user
export function addUser(userName, userEmail) {
  const users = loadUsers();

  users.push({
    id: uuidv4(),
    name: userName,
    email: userEmail,
  });

  saveUser(users);
}

//delete a user

export function removeUser(userID) {
  const users = loadUsers();

  const newUsers = users.filter((user) => {
    return user.id !== userID;
  });

  saveUser(newUsers);
}

//update a user
export function updateUser(userID, userName, userEmail) {
  const users = loadUsers();

  const theUser = users.find((user) => {
    return user.id === userID;
  });

  if (theUser) {
    const editedUser = {
      ...theUser,
      id: userID,
      name: userName,
      email: userEmail,
    };
    const newUsers = users.map((user) => {
      return user.id === userID ? editedUser : user;
    });
    saveUser(newUsers);
  }
}

//read a user

export function readUser(userID) {
  const users = loadUsers();
  const user = users.find((user) => {
    return user.id === userID;
  });

  if (user) {
    console.log("name: ", user.name, "email: ", user.email);
  } else {
    console.log("User not found");
  }
}

const saveUser = (users) => {
  const dataJson = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJson);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
