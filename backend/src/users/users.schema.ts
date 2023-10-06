import Joi from "joi";

export const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  cpf: Joi.string().required(),
  phone: Joi.string().required(),
  gender: Joi.string().required(),
  date_of_birth: Joi.string().isoDate().required(),

});

export const updateUserSchema = Joi.object({
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  cpf: Joi.string().optional(),
  phone: Joi.string().optional(),
  gender: Joi.string().optional(),
  date_of_birth: Joi.string().isoDate().optional(),
});
