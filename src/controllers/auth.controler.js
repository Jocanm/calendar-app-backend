export const registerUser = (req, res) => {
    const {name,email,password} = req.body
    res.status(200).json({
        message:"User created successfully",
        data:{name,email,password}
    })
}

export const loginUser = (req, res) => {
    res.send("/Ruta para login de usuarios")
}

export const refreshToken = (req, res) => {
    res.send("Ruta para renovar el token")
}