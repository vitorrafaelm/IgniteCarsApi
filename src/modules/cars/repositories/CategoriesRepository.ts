import { Category } from '../models/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoriesRepository';

// DTO => Data Transfer Object

class CategoriesRepositories implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category();

    // O object.assign recebe um model/objeto e os tributos que
    // devem ser passados para ele;
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepositories };
