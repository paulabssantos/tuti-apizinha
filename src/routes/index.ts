import {Router} from 'express'
import {product_routes} from './products/products.routes'

const routes = Router()

routes.use('/products',product_routes)

export {routes}