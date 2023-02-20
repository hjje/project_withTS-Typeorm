import { Request, Response } from 'express';
import userService from '../services/userService'
import { catchAsync } from '../utils/error';

const kakaoLogin = catchAsync(async(req: Request, res: Response): Promise<void> => {
    const authCode = req.query.code as string;

    if(!authCode) throw new Error('missing Authcode');

    const accessToken: Object = await userService.kakaoLogin(authCode);
    res.status(200).json({accessToken})
})

export default { kakaoLogin }