import { getRepository, Repository } from 'typeorm';

import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';

import { Rentals } from '../entities/Rental';

class RentalRepository implements IRentalsRepository {
  private repository: Repository<Rentals>;

  constructor() {
    this.repository = getRepository(Rentals);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rentals> {
    const openByCar = await this.repository.findOne({ car_id });
    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rentals> {
    const openByUser = await this.repository.findOne({ user_id });
    return openByUser;
  }

  async create({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rentals> {
    const rental = this.repository.create({
      car_id,
      user_id,
      expected_return_date,
    });

    await this.repository.save(rental);
    return rental;
  }
}

export { RentalRepository };
