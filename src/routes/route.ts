import {Request, Response, Router} from 'express'
import { CreateClietService } from '../service/createClient.controller'
import { PrismaClient } from '@prisma/client'

export class RouterService {
  private routes: Router
  private prismaClient: PrismaClient
  constructor(private route: Router, private prisma: PrismaClient){
    this.routes = this.route
    this.prismaClient = this.prisma
  }

  exec(){
    const clientController = new CreateClietService(this.prismaClient)

    this.routes.use('/api/v1')
    this.routes.get(`/`, () => { console.log(`TESTE`)})

    this.routes.post('/create', (req: Request, res: Response) => clientController.create(req.body))

    return this.routes
  }
}

