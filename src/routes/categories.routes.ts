/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory/index';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.get('/', (request, response) => {
  console.log('reload working');
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/', (request, response) => createCategoryController().handle(request, response));

categoriesRoutes.post('/import', upload.single('file'), (request, response) => importCategoryController.handle(request, response));

export { categoriesRoutes };
