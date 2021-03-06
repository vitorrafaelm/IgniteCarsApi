// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';
import { rentalRoutes } from './rental.routes';

const router = Router();

router.use(authenticateRoutes);

router.use('/categories', categoriesRoutes);
router.use('/speficications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carRoutes);
router.use('/rentals', rentalRoutes);

export { router };
