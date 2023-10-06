import { Request, Response, Router } from 'express'
import { database } from '../db';
import { User } from './user.model';

export const usersRouter = Router();

const userRepository = database.getRepository(User)

usersRouter.post('/users', (req: Request, res: Response) => {
  const data = req.body;
  const newUser = {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
  };
  userRepository.insert(newUser)
  res.sendStatus(201);
});

usersRouter.put('/users/:id', async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const dataToUpdate = req.body;

  await userRepository.update(userId, dataToUpdate)

  res.sendStatus(204);
});


usersRouter.delete('/users/:id', async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  await userRepository.delete(userId)

  res.status(204)
});

usersRouter.get('/users', async (req: Request, res: Response) => {
  const users = await userRepository.find();
  res.status(200).json({
    data: users,
  });
});
