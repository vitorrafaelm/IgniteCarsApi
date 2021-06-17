// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const {
      driver_license, email, name, password,
    } = request.body;

    await createUserUseCase.execute({
      driver_license, email, name, password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
