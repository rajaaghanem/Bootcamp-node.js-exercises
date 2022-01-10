import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

//add a user
export function addUser(userName, userEmail) {
    const users = loadUsers();

    users.push({
        id:uuidv4(),
        name: userName,
        email: userEmail,
    })

    saveUser(users)
    // console.log(users);
}

//delete a user

export function removeUser(userID){
    const users = loadUsers();

    const newUsers= users.filter((user)=> {
        return user.id !== userID
    });

    saveUser(newUsers);
}

const saveUser=(users)=>{
    const dataJson= JSON.stringify(users);
    fs.writeFileSync('users.json', dataJson);
}

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};




