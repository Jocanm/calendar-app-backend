// import PrismaProvider from "@prisma/client"
// const {PrismaClient} = PrismaProvider

// const prisma = new PrismaClient()
// const {user} = prisma

import PrismaProvider from '@prisma/client'
const {PrismaClient} = PrismaProvider;

const prisma = new PrismaClient()
const {user} = prisma;


export const registerUser = async(req, res) => {
    const {name,email,password} = req.body

    try {

        let usuario = await user.findUnique({
            where:{
                email
            }
        })

        if(usuario){
            return res.status(400).json({
                ok:false,
                message:"Email is already in use"
            })
        }

        usuario = await user.create({
            data:{
                name,email,password
            }
        })
        
        delete usuario.password

        res.status(201).json({
            ok:true,
            message:"User created succesfully",
            data:usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"An error occurred while creating an user"
        })
    }

}

export const loginUser = (req, res) => {
    const {email,password} = req.body 

    res.status(201).json({
        ok:true,
        data:{email,password}
    })
}

export const refreshToken = async(req, res) => {
    res.send("endpoint para refrescar el token")
}