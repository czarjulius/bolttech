import { HTTP, RESPONSE } from '@constants/enums';
import { Request, Response, NextFunction } from 'express';
import createError from '@helpers/createError';
import * as projectService from './project.service';
import { ProjectInterface, GetProjectsInterface, DeleteProjectInterface } from './project.interface';
import createResponse from '@helpers/createResponse';

export const createProjectController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await projectService.createProject({
      ...req.body,
    } as ProjectInterface);

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

export const getProjectsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, message, data } = await projectService.getProjects({
      ...(req as any).query,
    } as GetProjectsInterface);

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

export const updateProjectController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { projectId } = req.params;

    const { error, message, data } = await projectService.updateProject({
      projectId: parseInt(projectId),
      ...req?.body,
    } as ProjectInterface);

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

export const deleteProjectByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { projectId } = req.params;
    const { error, message, data } = await projectService.deleteProject({
      projectId: Number(projectId),
    } as DeleteProjectInterface);

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
