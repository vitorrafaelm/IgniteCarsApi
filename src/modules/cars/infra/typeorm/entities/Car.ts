import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidV4 } from 'uuid';

import { Category } from './Category';

@Entity('cars')
class Car {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({ name: 'category_id' })
  @ManyToOne(() => Category)
  category: Category;

  @Column()
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Car };
