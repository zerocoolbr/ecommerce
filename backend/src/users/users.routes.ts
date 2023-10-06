import { Request, Response, Router } from 'express';
import { deleteUser, getUser, insertUser, listUsers, updateUser } from './users.repository';

export const usersRouter = Router();

usersRouter.post('/users', async (req: Request, res: Response) => {
  const user = req.body;
  await insertUser(user);
  res.sendStatus(201);
});

usersRouter.put('/users/:id', async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const userData = req.body;

  const user = await getUser(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  await updateUser(userId, userData);
  res.sendStatus(204);
});

usersRouter.delete('/users/:id', async (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  const user = await getUser(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  await deleteUser(userId);
  res.status(204);
});

usersRouter.get('/users', async (req: Request, res: Response) => {
  const users = await listUsers();

  res.status(200).json({
    data: users,
  });
});

usersRouter.get('/users/:id', async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await getUser(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
});
