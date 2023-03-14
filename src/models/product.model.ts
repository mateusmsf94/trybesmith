import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces';
import connections from './connection';

const addProduct = async (product: IProduct): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connections.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const productModel = { addProduct };

export default productModel;
