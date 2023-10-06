import { NextFunction, Request, Response } from "express";
import Joi from 'joi';

export const validationSchemaMiddleware = (validationSchema: Joi.ObjectSchema) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await validationSchema.validateAsync(data);
      return next();
    } catch (error: any) {
      return res.status(400).json({
        data: error.details
      })
    }
  }
}
