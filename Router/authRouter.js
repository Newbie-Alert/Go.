import express from 'express'
import { body } from 'express-validator'
import { validator } from '../middleware/validator.js'
import * as authController from '../Controller/authController.js'

export const authRouter = express.Router()

const validateSignIn = [
  body('username').trim()
    .notEmpty().withMessage('username is missing')
    .isLength({ min: 3, max: 8 }).withMessage('text should be at least 3 characters')
  , body('password').trim()
    .notEmpty().withMessage('password is missing')
    .isLength({ min: 3, max: 8 }).withMessage('text should be at least 3 characters')
  , validator
]

const validateSignUp = [
  ...validateSignIn
  , body('name').trim()
    .notEmpty().withMessage('text should be at least 3 characters')
  , body('email').trim()
    .notEmpty().withMessage('email is missing')
    .isEmail().withMessage('check your email')
  , validator
]



authRouter.post('/signup', validateSignUp, authController.signUp)

authRouter.post('/signin', validateSignIn, authController.signIn)