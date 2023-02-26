import express, { Router } from 'express';
import * as postController from '../controllers/postController';

const routes: Router = express.Router();

routes.get('/main', postController.getPostByFilter)

export { routes };