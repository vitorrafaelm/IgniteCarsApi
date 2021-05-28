import { Category } from '../../models/Category';
import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
