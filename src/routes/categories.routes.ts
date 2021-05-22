/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';

import { Category } from '../models/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category: Category = new Category();

  // O object.assign recebe um model/objeto e os tributos que
  // devem ser passados para ele;
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json(categories);
});

export { categoriesRoutes };
