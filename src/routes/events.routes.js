import express from 'express';
import { validateJwt } from '../../middlewares/validateJWT.js';
import { deleteEvent, getEventos, postEvent, updateEvent } from '../controllers/events.controler.js';

export const eventsRouter = express.Router()

// Todas las rutas pasan por la validación del validateJwt

eventsRouter.use( validateJwt );

eventsRouter.get("/", getEventos)

eventsRouter.post("/", postEvent) 

eventsRouter.put('/:id', updateEvent)

eventsRouter.delete('/:id', deleteEvent)


