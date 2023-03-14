import { ResultSetHeader } from 'mysql2';
import { IUser, User } from '../interfaces';
import connection from './connection';

const createUser = async (user: IUser): Promise<User> => {
  const { username, level, password, vocation } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, level, password, vocation) VALUES (?, ?, ?, ?);
  `, [username, level, password, vocation]);
  return { id: insertId, ...user };
};

const userModel = { createUser };

export default userModel;