import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { DbConnection } from "./db/db.js";
import { authRouter } from "./routes/auth.js";

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter)

app.get("/", (req, res) => {
    res.json({
        message: 'Ok'
    })
})

app.listen(process.env.PORT, async()=>{
    await DbConnection()
    console.log("Server listen on port", process.env.PORT);
})