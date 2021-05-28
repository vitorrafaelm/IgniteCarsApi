// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => createSpecificationController.handle(request, response));

export { specificationsRoutes };
