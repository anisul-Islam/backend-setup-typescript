import dotenv from "dotenv";

dotenv.config();

export const SERVER_PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL || "";
