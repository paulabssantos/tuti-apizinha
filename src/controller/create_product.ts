import {Request,Response} from 'express'
import { isString } from 'util'
import {createProduct } from "../models/create_product"

export class createProductController {
    public async CreateProduct (req: Request,res: Response): Promise<Response>{
        const {nome, descricao, fornecedor, quantidade} = req.body
        const create_product = new createProduct()

        try {
            if(nome == "" ||nome == " " || !isString(nome) || descricao == "" || descricao == " " || !isString(descricao) || fornecedor == "" || fornecedor == " " || !isString(fornecedor)){
                throw "Os campos nome, descrição e fornecedor precisam ser do tipo texto e não podem ficar em branco."
            }
    
            else if(isNaN(quantidade) || quantidade == ""){
                throw "A quantidade precisa ser um e não pode ficar em branco."
            }
            else{
                const result = await create_product.create(nome,descricao,fornecedor,quantidade)
                res.statusCode = 200
                return res.json(result)
            }
        } catch (error) {
            res.statusCode = 400
            return res.json(error)
        }
    
    }
}