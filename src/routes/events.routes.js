import express from 'express';
import { check } from 'express-validator';
import { isDate } from '../../helpers/isDate.js';
import { validateFields } from '../../middlewares/validateFields.js';
import { validateJwt } from '../../middlewares/validateJWT.js';
import { deleteEvent, getEventos, postEvent, updateEvent } from '../controllers/events.controler.js';

export const eventsRouter = express.Router()

// Todas las rutas pasan por la validación del validateJwt

eventsRouter.use( validateJwt );

eventsRouter.get("/",getEventos)

eventsRouter.post(
    "/",
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria o debe ser un valor valido').custom( isDate ),
        validateFields
    ]
    , postEvent
) 

eventsRouter.put('/:id', updateEvent)

eventsRouter.delete('/:id', deleteEvent)


