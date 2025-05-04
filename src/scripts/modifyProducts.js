import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  const db = JSON.parse(data);

  const updateDB = db.map(({ name, price, category }) => ({
    name,
    price,
    category,
  })); //additional () to return info without word return

  writeFile(PATH_DB, JSON.stringify(updateDB), 'utf-8');
};

modifyProducts();
