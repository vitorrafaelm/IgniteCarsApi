import { ICreateRentalDTO } from '../dtos/ICreateRentalDTO';
import { Rentals } from '../infra/typeorm/entities/Rental';

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rentals>;
  findOpenRentalByUser(user_id: string): Promise<Rentals>;
  create({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rentals>;
  findById(id: string): Promise<Rentals>;
}

export { IRentalsRepository };
