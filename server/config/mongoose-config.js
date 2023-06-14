import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

function connectDb() {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hgqscl5.mongodb.net/${DB_NAME}`
    )
    .then(() => console.log(`Connected to DB.`))
    .catch((err) => console.log(err));
}

export default connectDb;
