import jwt from 'jsonwebtoken';
import userDao from '../models/userDao';
import { catchAsync } from '../utils/error';

const loginRequired = catchAsync(async (req: { headers: { authorization: any }; user: any }, res: any, next: () => void) => {

    const accessToken = req.headers.authorization
    console.log(req.headers)
    if (!accessToken) throw new Error('accessTokenErr')
    
    const decoded: any = jwt.verify(accessToken, process.env.JWT_SECRET)
    
    const user = await userDao.getUserByKakaoId(decoded.id)
    
    if (!user) throw new Error('getUserByKakaoIdErr')

    req.user = user;
    next();
})

export { loginRequired }