import orderModel from '../models/order.model';

const getAllOrders = async () => {
  const orders = await orderModel.getAllOrders();
  return orders;
};

const orderService = { getAllOrders };

export default orderService;