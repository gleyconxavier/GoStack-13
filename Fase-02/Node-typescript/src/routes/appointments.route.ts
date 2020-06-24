import { Router } from 'express';
import routes from '.';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

// mock db
const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
