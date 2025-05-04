import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readFile, writeFile } from 'fs/promises'; //instead of import * as fs from 'node:fs/promises'. Here we only import what we need
import { PATH_DB } from '../constants/products.js';

const generateProduct = async (number) => {
  const db = await readFile(PATH_DB, 'utf-8');
  const parseDb = JSON.parse(db); //to make an array
  console.log('db:', db);
  for (let i = 0; i < number; i++) {
    const product = createFakeProduct();
    parseDb.push(product); //add new info into the array
  }

  writeFile(PATH_DB, JSON.stringify(parseDb, null, 2), 'utf-8'); //add changes to already existing json
};

generateProduct(5);
