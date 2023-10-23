import { RequestHandler } from 'express'

export const createProduct: RequestHandler = (_req, res) => {
  res.send('Creating product')
}

export const updateProduct: RequestHandler = (_req, res) => {
  res.send('Updating product')
}
