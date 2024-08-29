import {Request, Response, Router} from 'express'
import { ClietController } from '../model/Client/client.controller'
import { PrismaClient } from '@prisma/client'

export class APIRoute {
  public route: Router
  private clietController: ClietController;
  constructor(private readonly prismaClient: PrismaClient){
    this.route = Router();
    this.clietController = new ClietController(this.prismaClient)
    this.execute();
  }

  execute(){
    this.route.get(`/`, () => { console.log(`TESTE`) })

    this.route.post('/client', async (req: Request, res: Response) => {
      return res.status(201).json(await this.clietController.create(req.body)) 
    })

    this.route.get('/client', async(req:Request, res: Response) => {
      return res.status(200).json(await this.clietController.getClient())
    })
  }
}
