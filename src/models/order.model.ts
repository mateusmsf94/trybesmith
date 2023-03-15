import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAllOrders = async () => {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT O.id, O.user_id as userId, json_arrayagg(P.id) as productsIds FROM Trybesmith.orders O
    JOIN Trybesmith.products P ON P.order_id = O.id
    GROUP BY O.id`,
  );
  return orders;
};

const orderModel = { getAllOrders };

export default orderModel;
