/* 
    User routes / auth
    host + /api/auth
*/

import express from 'express';
import { loginUser, refreshToken, registerUser } from '../controllers/auth.controler.js';

export const authRouter = express.Router()

authRouter.get("/new", refreshToken)

authRouter.post("/register",registerUser)

authRouter.post("/", loginUser)