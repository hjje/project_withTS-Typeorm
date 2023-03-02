import { Request, Response } from 'express';
import * as userService from '../services/userService'
import { catchAsync } from '../utils/error';

const socialLogin = catchAsync(async(req: Request, res: Response): Promise<void> => {
    const kakaoCode = req.query.code as string;
    const naverToken = req.headers.authorization as string;

    // kakao & naver login
    if(!kakaoCode && !naverToken) {
        throw new Error('missing Authcode')
    } 
    // kakao login
    else if (kakaoCode && !naverToken){
        const accessToken = await userService.kakaoLogin(kakaoCode)
        res.status(200).json({accessToken})
    } 
    // naver login
    else if (!kakaoCode && naverToken){
        const accessToken = await userService.naverLogin(naverToken)
        res.status(200).json({accessToken}) 
    }
})

const getUserInfo = async(req: Request, res: Response) => {
    const userId = req.params.id

    const userData = await userService.getUserInfo(userId)
    res.status(200).json({data: userData})
}

export { 
    socialLogin,
    getUserInfo
 }