import { PrismaClient, Client } from "@prisma/client";
import { Client as ClientInterface } from "../../interface/client.interface";

export class ClietService {
  constructor(private readonly prismaClient: PrismaClient){}

  mapResponse(data: Client ): ClientInterface {
    return {
      name: data.name,
      surName: data.surName,
      cpfCnpj: data.cpfCnpj,
      city: data.city,
      email: data.email,
      numberPhone: data.numberPhone
    }
  } 

  async createClient(data: ClientInterface): Promise<ClientInterface>{

    const clientAlreadyExists = await this.prismaClient.client.findFirst({
      where: {
        cpfCnpj: data.cpfCnpj
      }
    })

    if(clientAlreadyExists) throw new Error(`Client already exists!`)

    const client = await this.prismaClient.client.create({
      data
    })

    return this.mapResponse(client)
  }

  async getClient(cpfCnpj: string): Promise<ClientInterface>{
    const client = await this.prismaClient.client.findFirst({
      where: {cpfCnpj}
    })

    if(!client) throw new Error(`Client with cpfCnpj:${cpfCnpj} not found!`)

    return this.mapResponse(client)
  }
}