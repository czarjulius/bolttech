import { Op } from 'sequelize';
import models from '@db/models';
import { sanitizeObj } from '@helpers/sanitizeObj';
import { ProjectInterface, GetProjectsInterface, DeleteProjectInterface } from './project.interface';
import { getPaginatedRecords } from '@helpers/paginate';
import { editEntity } from '../../services/generic';

const { Project } = models;

export const createProject = async (data: ProjectInterface) => {
  try {
    const existingEntity = await Project.findOne({
      where: {
        name: data.name,
      },
      raw: true,
      attributes: ['id'],
    });
    if (existingEntity) {
      throw new Error('Project with this name already exists');
    }

    const project = await Project.create(
      sanitizeObj({
        name: data.name,
      })
    );
    return {
      error: false,
      message: 'Project added successfully.',
      data: project,
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

export const getProjects = async (data: GetProjectsInterface) => {
  try {
    const projects = await getPaginatedRecords(
      Project,
      {
        page: data.page || 1,
        limit: data.limit,
      },
      {
        where: {
          ...(data.userId && {
            userId: {
              [Op.eq]: data.userId,
            },
          }),
          ...(data.id && {
            id: {
              [Op.eq]: data.id,
            },
          }),
        },
        attributes: ['id', 'name', 'userId', 'createdAt'],
        ignoreCount: true,
      }
    );

    return {
      error: false,
      message: 'Projects fetched successfully',
      data: projects.data,
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

export const updateProject = async (data: ProjectInterface) => {
  try {
    let existingEntity;

    if (data.name) {
      existingEntity = await Project.findOne({
        where: {
          name: data.name,
        },
        raw: true,
        attributes: ['id'],
      });
    }

    if (existingEntity) {
      throw new Error('Project with this name already exists');
    }

    const [isUpdated] = await editEntity(Project, { id: data.projectId }, { ...data });

    if (!isUpdated) {
      return {
        error: true,
        message: "Project doesn't exist",
        data: null,
      };
    }

    return {
      error: false,
      message: 'Project updated successfully',
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

export const deleteProject = async (data: DeleteProjectInterface) => {
  try {
    const isDeleted = await Project.destroy({
      where: {
        id: data.projectId,
      },
    });

    if (!isDeleted) {
      return {
        error: true,
        message: "Project doesn't exist",
        data: null,
      };
    }

    return {
      error: false,
      message: 'Project deleted successfully',
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
