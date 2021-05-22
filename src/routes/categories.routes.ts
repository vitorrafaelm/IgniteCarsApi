/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoriesService } from '../modules/cars/services/CreateCategoriesService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();
  return response.status(201).json(all);
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoriesService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
