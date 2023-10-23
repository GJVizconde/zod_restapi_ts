import { Router } from 'express'
import { login } from '../controllers/auth.controller'
import { schemaValidation } from '../middlewares/schemaValidator.middleware'
import { loginSchema } from '../schemas/auth.schema'

const router = Router()

router.post('/login', schemaValidation(loginSchema), login)

export default router
