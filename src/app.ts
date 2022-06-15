import express, { Router} from 'express'
import { listAllProductsController } from './controller/list_all'
import { listSpecificController } from './controller/list_specific'
import { createProductController } from './controller/create_product'
import {updateProductController} from './controller/update_product'
import {deleteProductController} from './controller/delete_product'

const ListAllProductsController = new listAllProductsController()
const ListSpecificController = new listSpecificController()
const CreateProductController = new createProductController()
const UpdateProductController = new updateProductController()
const DeleteProductController = new deleteProductController()

class App{
    public express: express.Application
    public constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }
    
    private middlewares():void{
         this.express.use(express.json())
    }

    private routes (): void {
        this.express.get('/',ListAllProductsController.listAllProducts)
        this.express.get('/:id',ListSpecificController.list_specific)
        this.express.post('/',CreateProductController.CreateProduct)
        this.express.put('/:id',UpdateProductController.update_product)
        this.express.delete('/:id',DeleteProductController.delete)
        
    }
}

export default new App().express