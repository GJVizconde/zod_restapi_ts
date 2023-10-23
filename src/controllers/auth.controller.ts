import { RequestHandler } from 'express'

export const login: RequestHandler = (req, res) => {
  try {
    console.log(req.body)
    res.send('login')
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
