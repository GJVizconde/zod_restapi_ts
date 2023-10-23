import { z } from 'zod'
export const productSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    price: z.number().nonnegative()
  })
})

export const updateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().nonnegative().optional()
  }),
  params: z.object({
    id: z.string().min(3)
  })
})
