"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../repositories/user.repository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const dataSource_1 = __importDefault(require("../dataSource"));
const kakaoLogin = (authCode) => __awaiter(void 0, void 0, void 0, function* () {
    const getKakaoToken = yield axios_1.default.get('https://kauth.kakao.com/oauth/token', {
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
    });

    console.log(getKakaoToken)
    
    const getKakaoUserData = yield axios_1.default.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            'Authorization': `Bearer ${getKakaoToken.data.access_token}`
        }
    });
    
    console.log(getKakaoUserData)

    const kakaoId = getKakaoUserData.data.id;
    const email = getKakaoUserData.data.kakao_account.email;
    const { profile_image: profile_image, nickname } = getKakaoUserData.data.properties;
    const userRepository = dataSource_1.default.getCustomRepository(user_repository_1.UserRepository);
    const isExist = yield userRepository.checkRegisteredAlready(kakaoId);
    let accessToken = '';
    if (!isExist) {
        yield userRepository.createUser(kakaoId, email, profile_image, nickname);
        accessToken = jsonwebtoken_1.default.sign({ id: kakaoId }, process.env.JWT_SECRET, {
            algorithm: process.env.ALGORITHM,
            expiresIn: process.env.JWT_EXPIRES_IN
        });
    }
    else {
        accessToken = jsonwebtoken_1.default.sign({ id: isExist.social_id }, process.env.JWT_SECRET, {
            algorithm: process.env.ALGORITHM,
            expiresIn: process.env.JWT_EXPIRES_IN
        });
    }
    return accessToken;
});
exports.default = { kakaoLogin };
