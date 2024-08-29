import { PrismaClient } from "@prisma/client";
import { Client } from "../../interface/client.interface";
import { ClietService } from "./client.service";

export class ClietController {
  private clientService: ClietService

  constructor(private readonly prismaClient: PrismaClient){
    this.clientService = new ClietService(this.prismaClient)
  }

  async create(data: Client) {
    const responseData = await this.clientService.createClient(data)

    return responseData
  }

  async getClient(){
    return this.clientService.getClient()
  }
}