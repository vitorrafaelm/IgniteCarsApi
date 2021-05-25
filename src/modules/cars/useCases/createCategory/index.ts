import { CategoriesRepositories } from '../../repositories/CategoriesRepository';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';
import { CreateCategoryController } from './CreateCategoryController';

const categoriesRepository = new CategoriesRepositories();

const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
