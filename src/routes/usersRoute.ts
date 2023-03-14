import express from 'express';
import userController from '../controllers/user.controller';

const usersRoute = express.Router();

usersRoute.post('/', userController.createUser);

export default usersRoute;