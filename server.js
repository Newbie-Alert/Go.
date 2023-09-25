import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import { authRouter } from './Router/authRouter.js';
import { config } from './config.js';
import { connectDB } from './DB/mongodb.js';
import { postRouter } from './Router/postRouter.js';

// const dotenv = require('dotenv');

const app = express();


app.use(express.json());
app.use(morgan('tiny'))
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// AUTH
app.use('/auth', authRouter)
app.use('/posts', postRouter)



// ErrorHandler
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Sorry, not Found' });
})

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ msg: 'Sorry, Server is broken' });
})

// DB 연결
connectDB().then(() => {
  app.listen(config.host.port, () => {
    console.log(`listening on `);
  })
}).catch(
  console.error()
)
