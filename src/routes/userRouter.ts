import userController from '../controllers/userController';
import { routes } from './index'

routes.post('/login', userController.kakaoLogin)

export { routes }