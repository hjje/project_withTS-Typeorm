import { UserRepository } from '../repositories/user.repository';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import appDataSource from '../dataSource';

interface KakaoUserData {
    id: number;
    kakao_account: {
    email: string;
    };
    properties: {
        profile_image: string;
        nickname: string;
    };
}

const kakaoLogin = async(authCode: string): Promise<Object> => {

    const getKakaoToken = await axios.get('https://kauth.kakao.com/oauth/token', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            grant_type: 'authorization_code',
            client_id: process.env.REST_API_KEY,
            redirect_url: process.env.REDIRECT_URI,
            code: authCode 
        },
        withCredentials: true
    })

    const getKakaoUserData = await axios.get<KakaoUserData>('https://kapi.kakao.com/v2/user/me', {
        headers: {
            'Authorization': `Bearer ${getKakaoToken.data.access_token}`
        }
    })

    const kakaoId = getKakaoUserData.data.id
    const email = getKakaoUserData.data.kakao_account.email
    const {profile_image: profile_image, nickname} = getKakaoUserData.data.properties

    const userRepository = appDataSource.getCustomRepository(UserRepository)
    const isExist = await userRepository.checkRegisteredAlready(kakaoId);

    let accessToken: string = '';

    if(!isExist) {
        await userRepository.createUser(kakaoId, email, profile_image, nickname);
        accessToken = jwt.sign({id: kakaoId}, process.env.JWT_SECRET,
            {
                algorithm: process.env.ALGORITHM,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    } else {
        accessToken = jwt.sign({id: isExist.social_id}, process.env.JWT_SECRET,
            {
                algorithm: process.env.ALGORITHM,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    }
    return accessToken
}

export default { kakaoLogin };