import express, { Router } from 'express';
import * as productController from '../controllers/productController'

const routes: Router = express.Router();

routes.get('', productController.getAllProducts)
routes.get('/main', productController.getAllProducts)
routes.get('/:productId', productController.getProductById)

export { routes };