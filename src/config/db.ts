import mongoose from "mongoose";
import { DB_URL } from ".";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("db is conneted");
  } catch (error) {
    console.log("db is not conneted");
    console.log(error);
    process.exit(1);
  }
};
