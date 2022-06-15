import {Request,Response} from 'express'
import { isString } from 'util'
import {updateProduct} from '../models/update_product'

export class updateProductController{
    public async update_product(req: Request,res: Response){
        const {nome,descricao,fornecedor,quantidade} = req.body
        const id = Number(req.params.id)
        const Update_Product = new updateProduct
        
        try {
            if(nome == "" ||nome == " " || !isString(nome) || descricao == "" || descricao == " " || !isString(descricao) || fornecedor == "" || fornecedor == " " || !isString(fornecedor)){
                throw "Os campos nome, descrição e fornecedor precisam ser do tipo texto e não podem ficar em branco."
            }
    
            else if(isNaN(quantidade) || quantidade == ""){
                throw "A quantidade precisa ser um número e não pode ficar em branco."
            }
            else{
                const result = await Update_Product.update_product(id,nome,descricao,fornecedor,quantidade)
                res.statusCode = 200
                return res.json(result)
            }
        } catch (error) {
            res.statusCode = 400
            return res.json(error)
        }
    }
}