import { readFile, writeFile } from 'fs/promises';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';
import path from 'path';

const createProductFiles = async () => {
  const db = JSON.parse((await readFile(PATH_DB, 'utf-8')) || []);

  for (const product of db) {
    const fileName = product.name.toLowerCase().replace(/\s+/g, '-') + '.json'; //changing all 'space' to '-'
    console.log(fileName);
    writeFile(
      path.join(PATH_FILES_DIR, fileName),
      JSON.stringify(product, null, 2),
      'utf-8',
    );
  }
};

createProductFiles();
