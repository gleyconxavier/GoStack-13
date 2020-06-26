import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Simplefied routing, all http requests of determined route
routes.use('/appointments', appointmentsRouter);

export default routes;
