import express from 'express'
import {home} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', home)


export default router