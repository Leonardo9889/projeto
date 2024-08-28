import { PrismaClient } from "@prisma/client";
import { Client } from "../interface/client.interface";

export class CreateClietService {
  constructor(private readonly prismaClient: PrismaClient){}

  async create(data: Client){
    
  }
}