import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  const db = JSON.parse((await readFile(PATH_DB, 'utf-8')) || '[]');

  return db.reduce((acc, { category, name }) => {
    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(name);

    return acc;
  }, {});
};

console.log(await groupProductsByCategories());
