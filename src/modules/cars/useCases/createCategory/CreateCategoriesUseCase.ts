import { inject, injectable } from 'tsyringe';

import { ICategoryRepository } from '@modules/cars/repositories/implementations/ICategoriesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest{
  name: string;
  description: string;
}

@injectable()
class CreateCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoriesUseCase };
