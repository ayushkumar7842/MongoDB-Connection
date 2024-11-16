// 1. Import MongoDB Client
import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
let dbInstance;
// 2. Function to connect to the database
export const connectToMongoDB = () => {
  MongoClient.connect(url)
    .then((client) => {
      // Store the database instance for future use
      dbInstance = client
      console.log("Mongodb is connected");

    })
    .catch((err) => {
      console.log(err);
    });
};

// 3. Function to access the database
export const getDB = () => {
  if (!dbInstance) {
    throw new Error("Database not connected. Call connectToMongoDB first.");
  }
  return dbInstance.db("confession");
};
