import userDao from '../models/userDao';
import jwt from 'jsonwebtoken';
import axios from 'axios';


const kakaoLogin = async (authCode:string) => {
    
    const getKakaoToken = await axios(
        {
        method : 'post',
        url : 'http://127.0.0.1:3000/oauth/callback/kakao',
        params: {
            grant_type: 'authorization_code',
            client_id: process.env.REST_API_KEY,
            redirect_url: process.env.REDIRECT_URI,
            code: authCode
        },
        withCredentials: true
    })

    const getKakaoUserData = await axios(
        {
        method : 'get',
        url : 'https://kapi.kakao.com/v2/user/me',
        params: {
            grant_type: 'authorization_code',
            client_id: process.env.REST_API_KEY,
            redirect_url: process.env.REDIRECT_URI,
            code: authCode
        },
        withCredentials: true
    })

    const kakaoId = getKakaoUserData.data.id
    const email = getKakaoUserData.data.kakao_account.email
    const {profile_image: profileImage, nickname} = getKakaoUserData.data.properties

    const isExist : any = await userDao.checkRegisteredAlready(kakaoId);
    
    let accessToken = '';

    if (!isExist) {
        await userDao.createUser(kakaoId, email, profileImage, nickname);
        accessToken = jwt.sign({id: kakaoId}, process.env.JWT_SECRET as string),
            {
                algorithm: process.env.ALGORITHM,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        
    } else {
     
        accessToken = jwt.sign({id: isExist.social_id}, process.env.JWT_SECRET as string),
            {
                algorithm: process.env.ALGORITHM,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        
    }

    return accessToken
}

export { kakaoLogin }