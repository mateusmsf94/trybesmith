import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser) => {
  const createdUser = await userModel.createUser(user);
  return createdUser;
};

const userService = { createUser };

export default userService;