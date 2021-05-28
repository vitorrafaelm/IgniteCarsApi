/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

export { categoriesRoutes };
