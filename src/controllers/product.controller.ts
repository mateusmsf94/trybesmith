import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productService from '../service/product.service';

const addProduct = async (req:Request, res:Response) => {
  const product: IProduct = req.body;
  const prod = await productService.addProduct(product);
  return res.status(201).json(prod);
};

const productController = { addProduct };

export default productController;