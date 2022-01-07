import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { DbConnection } from "./db/db.js";

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: 'Ok'
    })
})

app.listen(process.env.PORT, async()=>{
    await DbConnection()
    console.log("Server listen on port", process.env.PORT);
})