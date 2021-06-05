import { container } from 'tsyringe';

import { CategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/implementations/ISpecificationsRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepositories,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);
