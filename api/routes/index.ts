import express, { Router } from 'express';

const routes: Router = express.Router();

import userRouter from './userRouter'
import postRouter from './postRouter'
import productRouter from './productRouter'

routes.use('/users', userRouter.routes)
routes.use('/posts', postRouter.routes)
routes.use('/products', productRouter.routes)

export default routes;