import dayjs from 'dayjs';

import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { DayJsDateProvider } from '@shared/container/providers/implementations/DayJsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalsUseCase } from './CreateRentalsUseCase';

let createRentalsUseCase: CreateRentalsUseCase;
let dateProvider: IDateProvider;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe('Create Rental', () => {
  const dayAdd24HOURS = dayjs().add(1, 'day').toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    createRentalsUseCase = new CreateRentalsUseCase(
      rentalsRepositoryInMemory,
      dateProvider,
    );
  });

  it('should be able to create a new rental', async () => {
    const rental = await createRentalsUseCase.execute({
      user_id: '123456',
      car_id: '121212',
      expected_return_date: dayAdd24HOURS,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('should not be able to create a new rental if there is another open to the same user', async () => {
    expect(async () => {
      await createRentalsUseCase.execute({
        user_id: '123456',
        car_id: '121212',
        expected_return_date: dayAdd24HOURS,
      });

      await createRentalsUseCase.execute({
        user_id: '123456',
        car_id: '121212',
        expected_return_date: dayAdd24HOURS,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental if there is another open to the same car', async () => {
    expect(async () => {
      await createRentalsUseCase.execute({
        user_id: '1234',
        car_id: '121212',
        expected_return_date: dayAdd24HOURS,
      });

      await createRentalsUseCase.execute({
        user_id: '123456',
        car_id: '121212',
        expected_return_date: dayAdd24HOURS,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental with invalid return time', async () => {
    expect(async () => {
      await createRentalsUseCase.execute({
        user_id: '1234',
        car_id: '121212',
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
