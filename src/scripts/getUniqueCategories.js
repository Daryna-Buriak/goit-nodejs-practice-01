import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises';

const getUniqueCategories = async () => {
  const array = await fs.readFile(PATH_DB, 'utf-8');
  const arrayProducts = JSON.parse(array);

  return arrayProducts.reduce((acc, product) => {
    if (acc.includes(product.category)) {
      return acc;
    }
    acc.push(product.category);
    return acc;
  }, []);
};

console.log(await getUniqueCategories());
