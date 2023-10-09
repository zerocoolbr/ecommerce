import { Request, Response, Router } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationSchemaMiddleware } from "../middleware";
import { authSchema } from "./auth.schema";
import { getUserByEmail } from "../users/users.repository";

export const authRouter = Router();

authRouter.post(
  '/auth',
  validationSchemaMiddleware(authSchema),
  async (req: Request, res: Response) => {
    const email = req.body.email as string;
    const password = req.body.password as string;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.sendStatus(403);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.sendStatus(403);
    }

    const token = jwt.sign({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    }, process.env.TOKEN_SECRET as string, {
      expiresIn: process.env.TOKEN_EXPIRATION
    })

    return res.status(200).json(token);
})
