import { getDB } from "../../config/mongodb.js";

export default class ConfessionModel {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  static async create(title, body, author) {
    try {
      // 1. Get the database
      const db = getDB();
      // 2. Get the collection
      const collection = db.collection("confessions");

      // 3. Create the document to be inserted
      const confessionData = new ConfessionModel(title, body, author);
      console.log(confessionData);
      // 4. Insert the document and get the result
      const result = await collection.insertOne(confessionData);
      console.log(confessionData);
      return confessionData;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
