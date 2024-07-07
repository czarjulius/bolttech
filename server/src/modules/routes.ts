import { Router } from 'express';
import authRoutes from './auth/auth.route';
import projectRoutes from './project/project.route';
import taskRoutes from './task/task.route';

const router: Router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);

export default router;
