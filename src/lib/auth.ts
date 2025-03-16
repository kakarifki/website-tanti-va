import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface JwtPayload {
  adminId: string;
  email: string;
  iat: number;
  exp: number;
}

export async function verifyToken(token: string): Promise<JwtPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded as JwtPayload);
      }
    });
  });
}