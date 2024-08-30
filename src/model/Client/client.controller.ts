import { PrismaClient } from "@prisma/client";
import { Client, ResponseClient } from "../../interface/client.interface";
import { ClietService } from "./client.service";

export class ClietController {
  private clientService: ClietService

  constructor(private readonly prismaClient: PrismaClient){
    this.clientService = new ClietService(this.prismaClient)
  }

  async create(data: Client): Promise<ResponseClient> {
    try{
      const response = await this.clientService.createClient(data)

      return {
        status: 201,
        message: `Client create!`,
        response
      }
    }catch(error: any){
      return {
        status: 404,
        message: `Fail to create client!`,
        error: error.message
      }
    }
  }

  async getClient(cpfCnpj: string): Promise<ResponseClient>{
    try {
      const response = await this.clientService.getClient(cpfCnpj)

      return {
        status: 200,
        message: 'Success',
        response
      }
    } catch(error: any) {
      return {
        status: 400,
        message: 'Fail to get client!',
        error: error.message
      }
    }
  }
}