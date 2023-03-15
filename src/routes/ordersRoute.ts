import express from 'express';
import orderController from '../controllers/order.controller';

const ordersRoute = express.Router();

ordersRoute.get('/', orderController.getAllOrders);

export default ordersRoute;