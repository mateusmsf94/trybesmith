import express from 'express';
import ordersRoute from './routes/ordersRoute';
import productRouter from './routes/productsRoute';
import usersRoute from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;
