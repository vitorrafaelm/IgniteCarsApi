// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
