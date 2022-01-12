import jwt from "jsonwebtoken";

export const validateJwt = (req, res, next) => {

    // x-token headers

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:"No hay token en la petición"
        })
    }

    try {
        
        const {id,name,email} = jwt.verify(
            token,process.env.SECRET_JWT_SEED
        );

        req.id = id;
        req.name = name;
        req.email = email;

    } catch (error) {
        return res.status(401).json({ok:false, msg:"Token no valido"})
    }

    next()

}