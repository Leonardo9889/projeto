import {Request, Response, Router} from 'express'
import { ClietController } from '../model/Client/client.controller'
import { PrismaClient } from '@prisma/client'
import { ResponseClient } from '../interface/client.interface';
import { validateBodyMiddleare } from '../middleware/validateBody.middleware';

export class APIRoute {
  public route: Router
  private clietController: ClietController;

  constructor(private readonly prismaClient: PrismaClient){
    this.route = Router();
    this.clietController = new ClietController(this.prismaClient)
    this.execute();
  }

  async formatResponse(data: ResponseClient, res: Response){
    switch(data.status){
      case 200:
      case 201:
        return res.status(data.status).json(data.response) 
      case 404: 
        return res.status(data.status).json({
          message: data.message,
          error: data.error
        }) 

      default:
        return res.status(500).json({
          message: 'Internal server error!',
          error: data.error
        })
    }
  }

  execute(){
    this.route.get(`/`, () => { console.log(`TESTE`) })

    this.route.post('/client', async (req: Request, res: Response) => {
      const data = await this.clietController.create(req.body)
      
      return this.formatResponse(data, res)
    })

    this.route.get('/client', async(req:Request, res: Response) => { 
      if(!req.params.cpfCnpj) throw new Error('paramter cpfCnpj is required!')
      const data = await this.clietController.getClient(req.params.cpfCnpj)

      return this.formatResponse(data, res)
    })
  }
}
