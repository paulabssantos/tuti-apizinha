import {Request,Response} from 'express'
import {deleteProduct} from '../models/delete_product'


export class deleteProductController{
    public async delete(req: Request,res:Response):Promise<Response>{
        const {opcao} = await req.body
        const id = Number(req.params.id)
        const delete_product = new deleteProduct

        
        switch(opcao.toUpperCase()) {
            case 'S':
            case 'SIM':
                const result = await delete_product.delete_product(id)
                return res.json(`Item ${id} excluído com sucesso`)
    
            case 'N':
            case 'NÃO': 
            case 'NAO':
                return res.json("Nenhuma alteração feita")
    
            default:
                return res.json("Opção inválida")
                
        }
        
    }
}