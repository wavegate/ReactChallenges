import express, { Request, Response } from "express";

const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  throw Error("MONGODB_URI not defined in environmental variables.");
}

import cors from "cors";
app.use(cors());
app.use(express.json());
import cookieParser from "cookie-parser";

app.use(cookieParser());

import ChallengeRouter from "./routers/ChallengeRouter";
app.use("/challenges", ChallengeRouter);

app.all("*", (req: Request, res: Response) => {
  return res.json({ message: "Catch-all" });
});

export default app;
