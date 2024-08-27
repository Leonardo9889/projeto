import express from 'express'
import 'dotenv/config'
import {route} from './routes/route'
import { execConnection } from './database/database.service'

const port = process.env.PORT 

const app = express()

app.use(express.json())
app.use(route)

async function exec(){
  try {
    await execConnection()

    app.listen(port, () => {
      console.log(`listen on port ${port}`)
    })
  } catch (error: any) {
    console.log(`Fail to initializing server. Error: ${error && error.message}`)
    process.exit(1)
  }
} 

exec()
