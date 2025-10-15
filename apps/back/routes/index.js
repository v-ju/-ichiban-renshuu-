import express from 'express'
import signinRouter from './signin'

const router = express.Router()

router.use('/signin',signinRouter)

export default router