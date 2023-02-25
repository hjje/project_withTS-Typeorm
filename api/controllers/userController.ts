import { Request, Response } from 'express';
import * as userService from '../services/userService'
import { catchAsync } from '../utils/error';

const kakaoLogin = catchAsync(async(req: Request, res: Response): Promise<void> => {
    const authCode = req.query.code as string;

    if(!authCode) throw new Error('missing Authcode');

    const accessToken = await userService.kakaoLogin(authCode)
    res.status(200).json({accessToken})
})

const getUserInfo = async(req: Request, res: Response) => {
    const userId = req.params.id

    const userData = await userService.getUserInfo(userId)
    res.status(200).json({data: userData})
}

export { 
    kakaoLogin,
    getUserInfo
 }