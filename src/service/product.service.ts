import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const addProduct = async (product: IProduct) => {
  const prod = await productModel.addProduct(product);
  return prod;
};

const productService = { addProduct };

export default productService;