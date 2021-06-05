// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

class CreateCategoryController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoriesUseCase);

    createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
