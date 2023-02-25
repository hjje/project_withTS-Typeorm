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
exports.createUser = exports.checkRegisteredAlready = exports.getUserByKakaoId = void 0;
const user_entity_1 = require("../entities/user.entity");
const dataSource_1 = __importDefault(require("../dataSource"));
const userRepository = dataSource_1.default.getRepository(user_entity_1.User);
const getUserByKakaoId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOneBy({
        social_id: id,
    });
    return user;
});
exports.getUserByKakaoId = getUserByKakaoId;
const checkRegisteredAlready = (kakaoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.findOneBy({
            social_id: kakaoId
        });
        return user;
    }
    catch (_a) {
        throw new Error('checkRegisteredAlreadyErr');
    }
});
exports.checkRegisteredAlready = checkRegisteredAlready;
const createUser = (kakaoId, email, profile_image, nickname) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.create({
            social_id: kakaoId,
            email,
            profile_image_url: profile_image,
            nickname
        });
    }
    catch (_b) {
        throw new Error('createUserErr');
    }
});
exports.createUser = createUser;
// @Repository.apply(User)
// export class UserRepository extends Repository<User> {
//     public async getUserByKakaoId(id: number): Promise<User> {
//         const result = await this.findOne(
//             {
//                 where: {
//                     social_id: id
//                 }
//             }
//         )
//         return result[0]
//     }
//     public async checkRegisteredAlready(kakaoId: number): Promise<User> {
//         try{
//             const user = await this.findOne(
//                 { 
//                     where : {
//                         social_id: kakaoId
//                     }
//                 }
//             )
//             return user
//         } catch {
//             throw new Error('checkRegisteredAlreadyErr')
//         }
//     }
//     public async createUser(kakaoId: number, email: string, profile_image: string, nickname: string): Promise<void> {
//         try{
//             await this.findOne(
//                 {
//                     where: {
//                         social_id: kakaoId,
//                         email,
//                         profile_image_url: profile_image,
//                         nickname
//                     }
//                 }
//             )
//         } catch {
//             throw new Error('createUserErr')
//         }
//     }
// }
