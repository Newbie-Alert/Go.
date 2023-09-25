import { getUsers } from "../DB/mongodb.js";


export async function getUserByName(nickname) {
  return getUsers().findOne({ nickname }).then(data => {
    console.log(data);
    return data;
  })
}

export async function createUser(info) {
  return getUsers().insertOne(info).then((data) => data.insertedId.toString());
}