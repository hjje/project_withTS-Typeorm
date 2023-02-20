import express, { Router } from 'express';
import userController from '../controllers/userController';

const routes: Router = express.Router();

routes.post('/login', userController.kakaoLogin)

export default { routes };