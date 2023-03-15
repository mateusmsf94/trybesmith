import { Request, Response } from 'express';
import orderService from '../service/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  return res.status(200).json(orders);
};

const orderController = { getAllOrders };

export default orderController;