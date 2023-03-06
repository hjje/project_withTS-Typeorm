import express, { Router } from 'express';

const routes = express.Router();

import * as userRouter from './userRouter'
import * as postRouter from './postRouter'
import * as productRouter from './productRouter'

routes.use('/users', userRouter.routes)
routes.use('/products', productRouter.routes)
routes.use('/posts', postRouter.routes)

export { routes };