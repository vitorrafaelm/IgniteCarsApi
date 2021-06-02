import { getRepository, Repository } from 'typeorm';

import { Category } from '../entities/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './implementations/ICategoriesRepository';

// DTO => Data Transfer Object

class CategoriesRepositories implements ICategoryRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepositories;

  // Colocando o constructor como private somente a própria classe
  // consegue chamar o método construtor;
  constructor() {
    this.repository = getRepository(Category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find({});

    return categories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name, description,
    });

    await this.repository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepositories };
