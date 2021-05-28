// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/speficications', specificationsRoutes);

export { router };
