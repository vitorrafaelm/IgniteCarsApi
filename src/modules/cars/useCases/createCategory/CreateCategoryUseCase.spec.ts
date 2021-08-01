import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

let createCategoryUseCase: CreateCategoriesUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  // Executa uma função antes de algum teste
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepositoryInMemory);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category teste',
      description: 'Category description teste',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with same name', async () => {
    expect(async () => {
      const category = {
        name: 'Category teste',
        description: 'Category description teste',
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
