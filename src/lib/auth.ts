import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

export interface JwtPayload {
  adminId: string;
  email: string;
  iat: number;
  exp: number;
}

export async function verifyToken(token: string): Promise<JwtPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET as string, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded as JwtPayload);
      }
    });
  });
}