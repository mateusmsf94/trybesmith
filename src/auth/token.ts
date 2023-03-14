import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'teytey';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const checkToken = (token: string) => jwt.verify(token, JWT_SECRET);

export default { generateToken, checkToken };