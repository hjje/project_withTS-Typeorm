import express ,{ Router } from "express"
import { loginRequired } from '../utils/auth'
import orderController from '../controllers/orderController'

const routes : Router = express.Router();

routes.post('/buy', loginRequired, orderController.addBuyOrder)
routes.post('/addbuybid', loginRequired, orderController.addBuyBid)
routes.post('/sell', loginRequired, orderController.addSellOrder)
routes.post('/addsellbid', loginRequired, orderController.addSellBid)

export { routes }
