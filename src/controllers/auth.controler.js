import bcrypt from 'bcrypt'
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

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        usuario = await user.create({
            data:{
                name,email,password:hashedPassword
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

export const loginUser = async(req, res) => {
    const {email,password} = req.body 

    try {

        const usuario = await user.findUnique({
            where:{
                email
            }
        })

        if(!usuario){
            return res.status(400).json({
                ok:false,
                message:"Invalid email"
            })
        }

        if(!await bcrypt.compare(password, usuario.password)){
            return res.status(400).json({
                ok:false,
                message:"Invalid password"
            })
        }

        res.status(200).json({
            ok:true,
            message:"Valid fields",
            id:usuario.id,
            name:usuario.name
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"An error occurred, please contact and administrator"
        })
    }
}

export const refreshToken = async(req, res) => {
    res.send("endpoint para refrescar el token")
}