// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/speficications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
