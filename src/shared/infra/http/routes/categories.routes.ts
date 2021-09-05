/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';

import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { ensureAdmin } from '../middlewares/EnsureAdmin';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listCategoriesController.handle,
);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle,
);

export { categoriesRoutes };
