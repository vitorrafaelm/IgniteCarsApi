// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const token = await authenticateUserUseCase.execute({
        email, password,
      });

      return response.status(200).json(token);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { AuthenticateUserController };
