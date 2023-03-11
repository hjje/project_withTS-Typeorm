import express, { Router } from 'express';
import * as orderController from '../controllers/orderController';

const routes: Router = express.Router();

routes.post('/buy', orderController.addBuyOrder)
routes.post('/addbuybid', orderController.addBuyBid)
routes.post('/sell', orderController.addSellOrder)
routes.post('/addsellbid', orderController.addSellBid)

export { routes };