import express from 'express';
import productRouter from './routes/productsRoute';
import usersRoute from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRoute);

export default app;
