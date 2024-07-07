const Joi = require('@hapi/joi').extend(require('@joi/date'));

export const projectSchema = Joi.object({
  name: Joi.string().trim().required(),
});

export const getProjectsSchema = Joi.object({
  page: Joi.number().positive(),
  limit: Joi.number().positive().min(1).max(100),
  id: Joi.number().positive(),
  userId: Joi.number().positive(),
});

export const deleteProjectSchema = Joi.object({
  projectId: Joi.number().positive().required(),
});
