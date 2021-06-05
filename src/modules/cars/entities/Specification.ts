/* eslint-disable import/no-extraneous-dependencies */
import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('specifications')
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) { // Se não houver nenhum id, cria um novo
      this.id = uuidv4();
    }
  }
}

export { Specification };
