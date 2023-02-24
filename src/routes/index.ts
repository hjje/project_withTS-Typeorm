import express ,{ Router } from "express"

import * as userRouter  from './userRouter'
import * as productRouter from './productRouter'
import * as postRouter from './postRouter'
import * as orderRouter from './orderRouter'

const routes: Router = express.Router()

routes.use('/users', userRouter.routes)
routes.use('/products', productRouter.routes)
routes.use('/posts', postRouter.routes)
routes.use('/orders', orderRouter.routes)

export { routes }
