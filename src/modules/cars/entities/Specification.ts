/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) { // Se não houver nenhum id, cria um novo
      this.id = uuidv4();
    }
  }
}

export { Specification };
