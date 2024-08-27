import { Client, Connection } from 'pg'


const execConnection = async () => {
  let connection1: Client
  if (connection1) {
    return connection1
  }

    connection1 = new Client({
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST
    })

  await connection1.connect()

  // if (client.database)

    console.log()
    
  return connection1
  }