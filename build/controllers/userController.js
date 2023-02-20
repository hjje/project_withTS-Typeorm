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
const userService_1 = __importDefault(require("../services/userService"));
const error_1 = require("../utils/error");
const kakaoLogin = (0, error_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authCode = req.query.code;
    if (!authCode)
        throw new Error('missing Authcode');
    const accessToken = yield userService_1.default.kakaoLogin(authCode);
    res.status(200).json({ accessToken });
}));
exports.default = { kakaoLogin };
