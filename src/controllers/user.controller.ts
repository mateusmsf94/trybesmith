import { Request, Response } from 'express';
import jwt from '../auth/token';
import { IUser } from '../interfaces';
import userService from '../service/user.service';

const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const createdUser = await userService.createUser(user);
  const { password, ...userWithoutPass } = createdUser;
  const token = jwt.generateToken(userWithoutPass);
  return res.status(201).json({ token });
};

const userController = { createUser };

export default userController;