import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwt: {
    secretKey: 'qT!VF`1WHx6(.[C:g5gNB:[vFi0vh7#M',
    expiredSec: 86400,
  },
  bcrypt: {
    saltRounds: 10,
  },
  db: {
    host: required('DB_HOST', 'mongodb+srv://goOwner:dhkvmfrha1234@cluster0.4zhmecf.mongodb.net/?retryWrites=true&w=majority')
  }
}