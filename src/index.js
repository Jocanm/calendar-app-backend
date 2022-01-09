import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from "./routes/auth.routes.js";

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
    console.log("Server listen on port", process.env.PORT);
})