import { PrismaClient } from "@prisma/client";
import { Client } from "../../interface/client.interface";

export class ClietService {
  constructor(private readonly prismaClient: PrismaClient){}

  async createClient(data: Client){
    const client = await this.prismaClient.client.create({
      data
    })

    return client
  }

  async getClient(){
    return this.prismaClient.client.findFirst()
  }
}