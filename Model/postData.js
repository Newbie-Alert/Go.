import { ObjectId } from "mongodb";
import { getPosts } from "../DB/mongodb.js";


export async function getAll() {
  return getPosts().find().toArray().then(data => {
    console.log(data);
    return data;
  })
}

export async function getById(id) {
  const O_id = new ObjectId(id);
  return getPosts().findOne({ "_id": O_id })
    .then(data => {
      console.log(data);
      return data;
    })
}