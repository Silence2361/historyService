import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import historyRoutes from "./routes/historyRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api/history", historyRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "History Service is running!" });
});

app.use(errorHandler);

export default app;
