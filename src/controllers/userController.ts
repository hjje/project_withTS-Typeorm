import { kakaoLogin as _kakaoLogin } from '../services/userService';
import { catchAsync } from '../utils/error';
import { Request, Response } from "express";

const kakaoLogin = catchAsync(async (req:Request, res:Response) => {
    const authCode = req.query.code;

    if (!authCode) throw new Error('missingAuthCode');

    const accessToken = await _kakaoLogin(authCode);
    res.status(200).json({accessToken})
})

export default {
   kakaoLogin
}
