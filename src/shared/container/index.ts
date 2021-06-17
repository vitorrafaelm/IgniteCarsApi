import { container } from 'tsyringe';

import { UserRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { CategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/implementations/ISpecificationsRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationsRepository';

container.registerSingleton<IUsersRepository>(
  'UserRepository',
  UserRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepositories,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);
