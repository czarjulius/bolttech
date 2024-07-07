import { Router } from 'express';
import validateRequest from '@middlewares/validateRequest';
import * as taskController from './task.controller';
import { taskSchema, getTasksSchema, deleteAndUpdateSchema } from './task.schema';

const router = Router();

router.post('/', validateRequest(taskSchema, 'body'), taskController.createTaskController);

router.get('/', validateRequest(getTasksSchema, 'query'), taskController.getTasksController);
router.patch('/:taskId', validateRequest(deleteAndUpdateSchema, 'params'), taskController.updateTaskController);
router.delete('/:taskId', validateRequest(deleteAndUpdateSchema, 'params'), taskController.deleteTaskByIdController);

export default router;
