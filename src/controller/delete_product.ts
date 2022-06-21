import {Request,Response} from 'express'
import {deleteProduct} from '../models/delete_product'


export class deleteProductController{
    public async delete(req: Request,res:Response):Promise<Response>{
        const id = Number(req.params.id)
        const delete_product = new deleteProduct

        const result = await delete_product.delete_product(id)
        return res.json(`Item ${id} excluído com sucesso`)

        }
        
    }