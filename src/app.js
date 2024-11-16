import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "History Service is running!" });
});

export default app;
