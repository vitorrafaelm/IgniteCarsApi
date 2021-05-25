// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const speficicationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(speficicationRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
