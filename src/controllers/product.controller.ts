import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productService from '../service/product.service';

const addProduct = async (req:Request, res:Response) => {
  const product: IProduct = req.body;
  const prod = await productService.addProduct(product);
  return res.status(201).json(prod);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

const productController = { addProduct, getAllProducts };

export default productController;