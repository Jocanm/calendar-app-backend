import { validationResult } from "express-validator"

// TENGO QUE VER 10.EXPRESS-VALIDATOR MIN: 10:10 va a aplicar las validaciones al email

export const registerUser = (req, res) => {

    const {name,email,password} = req.body 

    const errors = validationResult( req )

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    res.status(201).json({
        ok:true,
        message:"User created succesfully",
        data:{name,email,password}
    })

}

export const loginUser = (req, res) => {
    res.send("/Ruta para login de usuarios")
}

export const refreshToken = (req, res) => {
    res.send("Ruta para renovar el token")
}