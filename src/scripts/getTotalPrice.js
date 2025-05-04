import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises';

const getTotalPrice = async () => {
  const array = await fs.readFile(PATH_DB, 'utf-8');
  const arrayProducts = JSON.parse(array);

  return arrayProducts.reduce((acc, product) => {
    return (acc += Number(product.price));
  }, 0);
};

console.log(await getTotalPrice());
