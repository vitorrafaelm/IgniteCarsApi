import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

interface IImportCategory {
  name: string,
  description: string;
}

class ImportCategoryUseCase {
  constructor(private importCategoriesRepository: ICategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      // A função pipe pega o stream e jogo para algum lugar que a gente determinar;
      stream.pipe(parseFile);

      parseFile.on('data', async (line) => {
        const [name, description] = line;

        categories.push({
          name,
          description,
        });
      })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = this.importCategoriesRepository.findByName(name);

      if (!existsCategory) {
        this.importCategoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };