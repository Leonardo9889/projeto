import { z } from 'zod'
import { Client } from '../interface/client.interface';


export const validateBodyMiddleare = z.object({
  name: z.string(),
  surName: z.string(),
  email: z.string().email(),
  city: z.string(),
  phoneNumber: z.string(),
  cpfCnpj: z.string()
})

