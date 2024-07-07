import { Router } from 'express';
import validateRequest from '@middlewares/validateRequest';
import * as authController from './auth.controller';
import { authSchema } from './auth.schema';

const router = Router();

router.post('/register', validateRequest(authSchema, 'body'), authController.registerController);

router.post('/login', validateRequest(authSchema, 'body'), authController.loginController);

export default router;
