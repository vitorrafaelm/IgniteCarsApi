import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

interface IRequest{
  name: string;
  description: string;
}

class CreateCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoriesUseCase };
