import express, { Router } from 'express';
import * as userController from '../controllers/userController';

const routes: Router = express.Router()

routes.post('/login', userController.socialLogin)
routes.get('/info/:id', userController.getUserInfo)

export { routes };