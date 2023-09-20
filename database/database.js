import MongoDb from 'mongodb'
import config from '../config.js'
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
  return MongoDb.MongoClient.connect()
}