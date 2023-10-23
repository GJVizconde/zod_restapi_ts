import express from 'express'
import authRoutes from './routes/auth.routes'
import productsRoutes from './routes/products.routes'

const app = express()

app.use(express.json())

app.use(authRoutes)
app.use(productsRoutes)

app.listen(6000)

console.log(`Server on port ${6000}`)
