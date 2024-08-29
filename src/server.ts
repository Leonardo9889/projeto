import express from 'express'
import 'dotenv/config'
import { APIRoute } from './routes/route'
import { DataBaseService } from './database/database.service'
import {PrismaClient} from '@prisma/client'
import { ClietController } from './model/Client/client.controller'
 
const app = express()


const prismaClient = new PrismaClient()
const dataBaseService = new DataBaseService(prismaClient)
const apiRoute = new APIRoute(prismaClient)
new ClietController(prismaClient)


app.use(express.json())
app.use('/api/v1',apiRoute.route)

async function exec(){
  try {
    await dataBaseService.connection()
    app.listen(process.env.PORT, () => {
      console.log(`listen on port ${process.env.PORT}`)
    })
  } catch (error: any) {
    console.log(`Fail to initializing server. Error: ${error && error.message}`)
    process.exit(1)
  }
} 

exec()
