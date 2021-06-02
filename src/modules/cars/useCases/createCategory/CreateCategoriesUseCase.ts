import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

interface IRequest{
  name: string;
  description: string;
}

class CreateCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoriesUseCase };
