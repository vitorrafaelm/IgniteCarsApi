import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CategoriesRepositories } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICategoryRepository } from '@modules/cars/repositories/implementations/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/implementations/ISpecificationsRepository';

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
