import {Request,Response} from 'express'
import { listAll } from '../models/list_all'


export class listAllProductsController {
    public async listAllProducts (req: Request,res: Response): Promise<Response>{
        const list = new listAll
        const result = await list.list_all()

        return res.json(result)
    }
}