import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import axios from 'axios';
import * as userRepository from '../repositories/user.repository'

const kakaoLogin = async(authCode: string): Promise<string> => {

    const kakaoAccessToken = await axios(
        {
            method: 'post',
            url: 'https://kauth.kakao.com/oauth/token',
            params: {
                'grant_type': 'authorization_code',
                'client_id': process.env.REST_API_KEY,
                'redirect_url': process.env.REDIRECT_URI,
                'code': authCode
            },
            withCredentials: true
        }
    )

    const kakaoUserInfo = await axios(
        {
            method: 'get',
            url: 'https://kapi.kakao.com/v1/oidc/userinfo',
            headers: {
                'Authorization': `Bearer ${kakaoAccessToken.data.access_token}`
            } 
        }
    )

    const kakaoId = kakaoUserInfo.data.sub
    const email = kakaoUserInfo.data.email
    const { picture: profileImage, nickname } = kakaoUserInfo.data

    const isExist = await userRepository.checkRegisteredAlready(kakaoId);

    let accessToken: string = '';

    if(!isExist) {
        await userRepository.createUser(kakaoId, email, profileImage, nickname)
        const payload = {id: kakaoId}
        const secretOrPrivateKey: Secret = process.env.JWT_SECRET
        const options: SignOptions = {
            algorithm: 'HS256',
            expiresIn: process.env.JWT_EXPIRES_IN
        }
        accessToken = jwt.sign(payload, secretOrPrivateKey, options)
    } else {
        const payload = {id: isExist.social_id}
        const secretOrPrivateKey: Secret = process.env.JWT_SECRET
        const options: SignOptions = {
            algorithm: 'HS256',
            expiresIn: process.env.JWT_EXPIRES_IN
        }
        accessToken = jwt.sign(payload, secretOrPrivateKey, options)
    }
    return accessToken
}

const getUserInfo = async(userId) => {
    const userData = await userRepository.getUserInfo(userId)
    return userData
}

export { 
    kakaoLogin,
    getUserInfo
 }