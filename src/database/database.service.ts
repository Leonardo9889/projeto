import { PrismaClient } from '@prisma/client'

export class DataBaseService {
  constructor(private prisma: PrismaClient){}
  
  async connection(){
    try {
      this.prisma = new PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
        log: ['error', 'info', 'warn'],
      })


      await this.prisma.$connect()
      console.log("Database running!")
    }catch(error){
      await this.prisma.$disconnect()
      console.error(`Fail to connect in database - Error ${error}`)
    }
  }
}

