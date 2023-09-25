import express from 'express'
import * as postContrllorer from '../Controller/postController.js'

export const postRouter = express.Router()


postRouter.get('/all', postContrllorer.getAllPosts);
postRouter.get('/:id', postContrllorer.getPostById)