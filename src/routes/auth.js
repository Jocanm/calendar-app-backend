/* 
    User routes / auth
    host + /api/auth
*/

import express from 'express';

export const authRouter = express.Router()

authRouter.get("/",(req,res) =>{
    res.send("Mis rutas de auth")
})