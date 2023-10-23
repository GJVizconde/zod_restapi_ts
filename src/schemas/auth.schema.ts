import { z } from 'zod'

export const loginSchema = z.object({
  body: z.object({
    email: z.string().min(1, 'Email is required').email({
      message: 'Write a correct email'
    }),
    password: z.string().min(1, 'Password is required').min(6, 'Password is too short')
  })
})
