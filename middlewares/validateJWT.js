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
        
        const {id,name} = jwt.verify(
            token,process.env.SECRET_JWT_SEED
        );

        req.uid = id;
        req.name = name;

    } catch (error) {
        return res.status(401).json({ok:false, msg:"Token no valido"})
    }

    next()

}