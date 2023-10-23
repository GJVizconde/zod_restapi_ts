import { Router } from 'express'
import { createProduct, updateProduct } from '../controllers/products.controller'
import { schemaValidation } from '../middlewares/schemaValidator.middleware'
import { productSchema, updateSchema } from '../schemas/products.schema'

const router = Router()

router.post('/products', schemaValidation(productSchema), createProduct)
router.put('/products/:id', schemaValidation(updateSchema), updateProduct)

export default router
