import express from 'express'
import cors from 'cors'
import { authRouter } from './Router/authRouter.js';

// const dotenv = require('dotenv');

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// AUTH
app.use('/auth', authRouter)


// ErrorHandler
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Sorry, not Found' });
})

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ msg: 'Sorry, Server is broken' });
})

app.listen(8080, () => {
  console.log('listening on 8080');
})