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
exports.getUserInfoByKakao = exports.getKakaoAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const getKakaoAccessToken = (authCode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, axios_1.default)({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        params: {
            "grant_type": 'authorization_code',
            "client_id": process.env.RESTAPI_KEY,
            "redirect_url": process.env.REDIRCT_URL,
            "code": authCode
        }
    });
    return result.data.access_token;
});
exports.getKakaoAccessToken = getKakaoAccessToken;
const getUserInfoByKakao = (getKakaoAccessToken) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, axios_1.default)({
        method: 'get',
        url: 'https://kapi.kakao.com/v1/oidc/userinfo',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: `Bearer ${getKakaoAccessToken}`
        }
    });
    return result.data;
});
exports.getUserInfoByKakao = getUserInfoByKakao;
