import {Request,Response} from 'express'
import { listSpecific } from '../models/list_specific'

export class listSpecificController {
    public async list_specific (req: Request,res: Response){
        const list = new listSpecific
        const id = Number(req.params.id)
        const result = await list.list_specific(id)
        
        return res.json(result)
    }
}