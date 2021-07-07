import fs from 'fs';

export const deleteFile = async (filename: string) => {
  // O stat verificar se um arquivo existe ou não na url/diretório;

  try {
    await fs.promises.stat(filename);
  // eslint-disable-next-line no-empty
  } catch { }

  await fs.promises.unlink(filename);
};
