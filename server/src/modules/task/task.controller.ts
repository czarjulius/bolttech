import { HTTP, RESPONSE } from '@constants/enums';
import { Request, Response, NextFunction } from 'express';
import createError from '@helpers/createError';
import * as taskService from './task.service';
import { TaskInterface, GetTasksInterface } from './task.interface';
import createResponse from '@helpers/createResponse';

export const createTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await taskService.createTask({
      ...req.body,
    } as TaskInterface);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err as any));
  }
};

export const getTasksController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await taskService.getTasks({
      ...(req as any).query,
    } as GetTasksInterface);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err));
  }
};

export const updateTaskController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskId } = req.params;

    const { error, message, data } = await taskService.updateTask(Number(taskId));

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err));
  }
};

export const deleteTaskByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskId } = req.params;
    const { error, message, data } = await taskService.deleteTask(Number(taskId));

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, {
          status: RESPONSE.ERROR,
          message,
          data,
        })
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.error(err);
    return next(createError.InternalServerError(err as any));
  }
};
