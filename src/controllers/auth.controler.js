import PrismaProvider from "@prisma/client"
const {PrismaClient} = PrismaProvider

const prisma = new PrismaClient()
const {user} = prisma

export const registerUser = async(req, res) => {
    try {
        const {name,email,password} = req.body 

        const newUser = await user.create({
            data:{
                name,email,password
            }
        })

        res.status(201).json({
            ok:true,
            message:"User created succesfully",
            data:newUser
        })
    } catch (error) {
        console.log(error);
        res.json({error})
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

    const users = await user.findMany({
        where:{email:"jluisangarita@mail.atlantico.edu.co"}
    })
    res.json({users})

}