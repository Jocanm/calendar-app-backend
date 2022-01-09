/* 
    User routes / auth
    host + /api/auth
*/

import express from 'express';
import {check} from 'express-validator';
import { validateFields } from '../../middlewares/validateFields.js';
import {loginUser,refreshToken,registerUser} from '../controllers/auth.controler.js';

export const authRouter = express.Router()

authRouter.get("/new",refreshToken)

authRouter.post(
    "/register",
    [
        check('name', "User name must be provided").not().isEmpty(),
        check('email', "Email invalid or Email was not provided").isEmail(),
        check('password', "Password length must be at least 6 characters").isLength({min:6}),
        validateFields
    ],
    registerUser)

authRouter.post(
    "/login",
    [
        check('email', "Email invalid or Email was not provided").isEmail(),
        check('password', "Password length must be at least 6 characters").isLength({min:6}),
        validateFields
    ],
    loginUser
)