import express, { Application, NextFunction, Request, Response } from "express";

import chalk from "chalk";

import morgan from "morgan";

import { SERVER_PORT } from "./config";
import { connectDB } from "./config/db";
import productsRoutes from "./routes/products";

const app: Application = express();

const port = SERVER_PORT || 3002;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "welcome to the express server",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("route not found");
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// api/products -> get products

app.listen(port, async () => {
  console.log(chalk.blue(`server is running at http://localhost:${port}`));
  connectDB();
});
