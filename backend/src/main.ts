import express, { Request, Response } from "express";
import config from "./config/config";
import firebaseApp from "./config/db";

const app = express();

const port = config.PORT || 6476;

firebaseApp();

app.get("/", (req: Request, res: Response) => {
  res.send("HUI SMART");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
