import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

// Crypt é uma lib que permite trabalhar com criptografia;

export default {
  // Recebe um folder, que é a pasta de destino
  upload(folder: string) {
    return {
      // diskstorage serve para a gente passar alguns informações,
      // Informação de destino por exemplo;
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
