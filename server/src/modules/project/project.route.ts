import { Router } from 'express';
import validateRequest from '@middlewares/validateRequest';
import * as projectController from './project.controller';
import { projectSchema, getProjectsSchema, deleteProjectSchema } from './project.schema';

const router = Router();

router.post('/', validateRequest(projectSchema, 'body'), projectController.createProjectController);

router.get('/', validateRequest(getProjectsSchema, 'query'), projectController.getProjectsController);
router.patch('/:projectId', validateRequest(projectSchema, 'body'), projectController.updateProjectController);
router.delete(
  '/:projectId',
  validateRequest(deleteProjectSchema, 'params'),
  projectController.deleteProjectByIdController
);

export default router;
