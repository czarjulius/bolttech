import { Op } from 'sequelize';
import models from '@db/models';
import { sanitizeObj } from '@helpers/sanitizeObj';
import { TaskInterface, GetTasksInterface } from './task.interface';
import { getPaginatedRecords } from '@helpers/paginate';
import { editEntity } from '../../services';

const { Task } = models;

export const createTask = async (data: TaskInterface) => {
  try {
    const task = await Task.create(
      sanitizeObj({
        description: data.description,
        projectId: data.projectId,
        userId: 1,
      })
    );
    return {
      error: false,
      message: 'Task added successfully.',
      data: task,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};

export const getTasks = async (data: GetTasksInterface) => {
  try {
    const tasks = await getPaginatedRecords(
      Task,
      {
        page: data.page || 1,
        limit: data.limit,
      },
      {
        where: {
          ...(data.projectId && {
            projectId: {
              [Op.eq]: data.projectId,
            },
          }),
          ...(data.id && {
            id: {
              [Op.eq]: data.id,
            },
          }),
        },
        attributes: ['id', 'description', 'projectId', 'createdAt'],
        ignoreCount: true,
      }
    );

    return {
      error: false,
      message: 'Tasks fetched successfully',
      data: tasks.data,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};

export const updateTask = async (taskId: number) => {
  try {
    const [isUpdated] = await editEntity(Task, { id: taskId }, { finishedAt: Date.now() });

    if (!isUpdated) {
      return {
        error: true,
        message: "Task doesn't exist",
        data: null,
      };
    }

    return {
      error: false,
      message: 'Task updated successfully',
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const isDeleted = await Task.destroy({
      where: {
        id: taskId,
      },
    });

    if (!isDeleted) {
      return {
        error: true,
        message: "Task doesn't exist",
        data: null,
      };
    }

    return {
      error: false,
      message: 'Task deleted successfully',
      data: null,
    };
  } catch (err) {
    return {
      error: true,
      message: (err as any).message,
      data: null,
    };
  }
};
