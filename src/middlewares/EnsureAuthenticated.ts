// eslint-disable-next-line import/no-extraneous-dependencies
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload{
  sub: string;
}

// eslint-disable-next-line max-len
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  // Cria um array com duas posições com as duas informações separadas pelo split
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '7783698978206a7dab23a62285724408') as IPayload;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
