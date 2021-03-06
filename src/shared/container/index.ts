import { container } from 'tsyringe';

import '@shared/container/providers/index';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CategoriesRepositories } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICategoryRepository } from '@modules/cars/repositories/implementations/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/implementations/ISpecificationsRepository';
import { ICarsRepository } from '@modules/cars/repositories/implementations/ICarsRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/implementations/ICarsImagesRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { RentalRepository } from '@modules/rentals/infra/typeorm/repositories/RentalRepository';

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepositories,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImageRepository',
  CarsImagesRepository,
);

container.registerSingleton<IRentalsRepository>(
  'RentalRepository',
  RentalRepository,
);
