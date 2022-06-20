import { Router } from 'express'

import { listAllProductsController } from '../../controller/list_all'
import { listSpecificController } from '../../controller/list_specific'
import { createProductController } from '../../controller/create_product'
import {updateProductController} from '../../controller/update_product'
import {deleteProductController} from '../../controller/delete_product'

const ListAllProductsController = new listAllProductsController()
const ListSpecificController = new listSpecificController()
const CreateProductController = new createProductController()
const UpdateProductController = new updateProductController()
const DeleteProductController = new deleteProductController()

const product_routes = Router()

product_routes.get('/',ListAllProductsController.listAllProducts)
product_routes.get('/:id',ListSpecificController.list_specific)
product_routes.post('/create',CreateProductController.CreateProduct)
product_routes.put('/update/:id',UpdateProductController.update_product)
product_routes.delete('/delete/:id',DeleteProductController.delete)

export {product_routes}

