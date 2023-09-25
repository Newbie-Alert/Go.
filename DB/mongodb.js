import { MongoClient } from "mongodb";
import { config } from "../config.js";

let db;

// 연결 / db 반환
export async function connectDB() {
  return MongoClient.connect(config.db.connect)
    .then(client => {
      db = client.db();
    });
}

export function getUsers() {
  return db.collection('users')
}


export function getPosts() {
  return db.collection('posts')
}