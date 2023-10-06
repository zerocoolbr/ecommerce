import Joi from 'joi';

export const createProductSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().uri().required(),
})

export const updateProductSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  image: Joi.string().uri().optional(),
})
