import express, { Router } from 'express';
import postController from '../controllers/postController';

const routes: Router = express.Router();

routes.get('', postController.getPostByFilter)

export default { routes };