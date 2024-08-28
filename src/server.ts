import express, { Router } from 'express'
import 'dotenv/config'
import {RouterService} from './routes/route'
import { DataBaseService } from './database/database.service'
import {PrismaClient} from '@prisma/client'
 
const app = express()
const routeService = Router()


const prismaClient = new PrismaClient()
const dataBaseService = new DataBaseService(prismaClient)
const route = new RouterService(routeService, prismaClient)

app.use(express.json())
app.use(route.exec)

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
