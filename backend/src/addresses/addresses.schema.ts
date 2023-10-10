import Joi from "joi";

export const createAddressesSchema = Joi.object({
  zip_code: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  adress_line_1: Joi.string().required(),
  adress_line_2: Joi.string().optional(),
});

export const updateAddressesSchema = Joi.object({
  zip_code: Joi.string().optional(),
  country: Joi.string().optional(),
  state: Joi.string().optional(),
  city: Joi.string().optional(),
  adress_line_1: Joi.string().optional(),
  adress_line_2: Joi.string().optional(),
});
