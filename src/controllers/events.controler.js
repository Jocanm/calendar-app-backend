import PrismaProvider from '@prisma/client'
const {PrismaClient} = PrismaProvider;
// 7. evento en base de datos
const prisma = new PrismaClient()
const {events} = prisma; 


export const getEventos = async (req,res) => {

    try {
        const eventos = await events.findMany({
            include:{
                user:{
                    select:{
                        name:true,
                    }
                }
            }
        })

        res.json(eventos)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Error interno"
        })
    }

}


export const postEvent = async(req, res) => {

    req.body.userId = req.uid

    req.body.start = new Date(req.body.start);
    req.body.end = new Date(req.body.end);

    try {
        
        const evento = await events.create({
            data:{
                ...req.body,
            }
        })

        res.status(201).json({
            ok:true,
            msg:"Event created successfully",
            data:evento
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Error interno"
        })
    }

}


export const updateEvent = async(req, res) => {

    const {id:eventId} = req.params;
    const {uid} = req

    try {
        
        const evento = await events.findUnique({
            where:{id:eventId}
        })

        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:"El evento con el id enviado no existe"
            })
        }

        if(evento.userId !== uid){
            return res.status(401).json({
                ok:false,
                msg:"No esta autorizado para editar este evento"
            })
        }

        const data = {
            ...req.body,
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        }

        const newEvent = await events.update({
            where:{id:eventId},
            data
        })

        res.json({
            ok:true,
            msg:"Evento actualizado correctamente",
            data:newEvent
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Error interno, contacte con un administrador"
        })
    }

}

export const deleteEvent = async(req, res) => {

    const {id:eventId} = req.params; 
    const {uid} = req;

    try {

        const evento = await events.findUnique({
            where:{id:eventId}
        }) 

        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:"Evento a eliminar no existe"
            })
        }

        if(evento.userId !== uid){
            return res.status(401).json({
                ok:false,
                msg:"No esta autorizado para eliminar este evento"
            })
        }

        await events.delete({
            where:{id:eventId}
        })

        res.json({
            ok:true,
            msg:"Evento eliminado correctamente"
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Error interno, contacte con un administrador"
        })

    }

}