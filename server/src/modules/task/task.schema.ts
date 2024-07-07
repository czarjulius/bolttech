const Joi = require('@hapi/joi').extend(require('@joi/date'));

export const taskSchema = Joi.object({
  description: Joi.string().trim().required(),
  projectId: Joi.number().positive().required(),
});

export const getTasksSchema = Joi.object({
  page: Joi.number().positive(),
  limit: Joi.number().positive().min(1).max(100),
  id: Joi.number().positive(),
  projectId: Joi.number().positive(),
});

export const deleteAndUpdateSchema = Joi.object({
  taskId: Joi.number().positive().required(),
});
