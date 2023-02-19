import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/login', userController.kakaoLogin);

export { router };

export function routes(_arg0: string, _routes: any) {
    throw new Error("Function not implemented.");
}
