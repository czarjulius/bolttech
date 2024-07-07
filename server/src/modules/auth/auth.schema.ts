const Joi = require('@hapi/joi').extend(require('@joi/date'));

export const authSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().min(5).required(),
});
