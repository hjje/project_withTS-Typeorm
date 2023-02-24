import express ,{ Router } from "express"
import postController from '../controllers/postController'

const routes : Router = express.Router()

routes.get("/", postController.getPostByFilter)
routes.get("/details/:userId", postController.getPostDetail)

export { routes }