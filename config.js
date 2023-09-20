import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiredSec: process.env.JWT_EXPIRED_SEC,
  },
  bcrypt: {
    saltRounds: process.env.BCRYPT_SALT_ROUNDS,
  },
}