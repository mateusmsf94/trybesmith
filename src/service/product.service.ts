import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const addProduct = async (product: IProduct) => {
  const prod = await productModel.addProduct(product);
  return prod;
};

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const productService = { addProduct, getAllProducts };

export default productService;