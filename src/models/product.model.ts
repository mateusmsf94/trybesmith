import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getAllProducts = async (): Promise<Product[]> => {
  const [products] = await connections.execute<Product[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return products;
};

const productModel = { addProduct, getAllProducts };

export default productModel;
