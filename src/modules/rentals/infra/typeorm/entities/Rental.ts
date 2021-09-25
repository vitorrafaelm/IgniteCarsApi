// eslint-disable-next-line import-helpers/order-imports
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidV4 } from 'uuid';

@Entity()
class Rentals {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  expected_return_date: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rentals };
