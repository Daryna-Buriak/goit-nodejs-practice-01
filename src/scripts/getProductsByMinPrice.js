import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises'; //to import ALL from fs

const getProductsByMinPrice = async (value) => {
  try {
    const stringProducts = await fs.readFile(PATH_DB, 'utf-8'); //now there is string of array in JSON in stringProducts
    const arrProducts = JSON.parse(stringProducts); // now there is array of data in arrProducts
    return arrProducts.filter((product) => product.price >= value);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getProductsByMinPrice(30)); //this will work in node, but in browser will return error that await can't work in not asyc function
