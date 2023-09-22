import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiredSec: parseInt(process.env.JWT_EXPIRED_SEC),
  },
  bcrypt: {
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS),
  },
  host: {
    port: parseInt(process.env.PORT)
  }
}