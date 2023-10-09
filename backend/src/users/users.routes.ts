import { Request, Response, Router } from 'express';
import { deleteUser, getUserById, insertUser, updateUser, usersPaginated } from './users.repository';
import { authMiddleware, validationSchemaMiddleware } from '../middleware';
import { createUserSchema, updateUserSchema } from './users.schema';

export const usersRouter = Router();

usersRouter.post(
  '/users',
  validationSchemaMiddleware(createUserSchema),
  async (req: Request, res: Response) => {
    const user = req.body;
    await insertUser(user);
    res.sendStatus(201);
});

usersRouter.put(
  '/users/:id',
  authMiddleware(),
  validationSchemaMiddleware(updateUserSchema),
    async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const userData = req.body;
    const tokenData = req.get('token-data') as any;

    if (tokenData.id !== userId) {
      return res.sendStatus(403)
    }

    const user = await getUserById(userId);

    if (!user) {
      return res.sendStatus(404);
    }

    await updateUser(userId, userData);
    res.sendStatus(204);
});

usersRouter.delete('/users/:id', authMiddleware(), async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const tokenData = req.get('token-data') as any;

  if (tokenData.id !== userId) {
    return res.sendStatus(403)
  }

  const user = await getUserById(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  await deleteUser(userId);

  return res.sendStatus(204);

});

usersRouter.get('/users', async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const offset = Number(req.query.offset) || 3;
  const firstName = req.query.firstName as string;

  const [users, count] = await usersPaginated(page, offset, firstName);

  res.status(200).json({
    data: users,
    page,
    count,
    hasNextPage: page * offset < count
  });
});

usersRouter.get('/users/:id', authMiddleware(), async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const tokenData = req.get('token-data') as any;
  const user = await getUserById(userId);

  if (tokenData.id !== userId) {
    return res.sendStatus(403)
  }

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
});
