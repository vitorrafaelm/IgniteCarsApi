/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

export { categoriesRoutes };
