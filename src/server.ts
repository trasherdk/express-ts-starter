import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv'
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envpath = resolve(__dirname, '.env')
/*
console.log('env:', envpath)
dotenv.config({ path: envpath })
*/
dotenv.config()

const { HOST, PORT } = process.env

const app: Application = express();

app.get("/api/*", (req: Request, res: Response) => {
  res.status(200).json({ message: `You are at ${import.meta.url}` });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome!" });
});

console.log(`\nStart Server on ${HOST}:${PORT}\n`);
app.listen(Number(PORT), String(HOST), () => {

  console.log(`\nServer listening on ${HOST}:${PORT}\n`);
})
