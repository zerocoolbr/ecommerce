import { NextFunction, Request, Response } from "express";
import Joi from 'joi';
import jwt from 'jsonwebtoken';

export const validationSchemaMiddleware = (validationSchema: Joi.ObjectSchema) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await validationSchema.validateAsync(data, {
        abortEarly: false,
        allowUnknown: false,
        convert: false
      });
      return next();
    } catch (error: any) {
      return res.status(400).json({
        data: error.details
      })
    }
  }
}

export const authMiddleware = () => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const AuthorizationHeader = req.get('Authorization') as string;

      if (AuthorizationHeader === undefined) return res.sendStatus(403);

      const token = AuthorizationHeader.split('Bearer ')[1];
      const tokenData = jwt.verify(token, 'abc') as any;
      req.headers['token-data'] = tokenData;
      next();
    } catch (error) {
      console.log(error);
      return res.sendStatus(403);
    }
  }
}
