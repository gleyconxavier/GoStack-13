import { Response, Request } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "João",
    email: "joaodocaminhao@gmail.com",
    password: "semfreio123",
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  });

  return response.json({ message: 'Hello world' });
}