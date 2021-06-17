/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
