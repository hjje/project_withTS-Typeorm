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
const post_entity_1 = require("../entities/post.entity");
const dataSource_1 = __importDefault(require("../dataSource"));
var StyleFilterSet;
(function (StyleFilterSet) {
    StyleFilterSet["trending"] = "order by p.likes DESC";
    StyleFilterSet["newest"] = "order by p.created_at DESC";
})(StyleFilterSet || (StyleFilterSet = {}));
const postRepository = dataSource_1.default.getRepository(post_entity_1.Post);
const getPostByFilter = (filterBy) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        relations: ["user"],
        select: [
            "post_image_url",
            "profile_image_url",
            "nickname",
            "likes",
            "feed_text",
            "created_at"
        ],
        order: {
            [StyleFilterSet[filterBy]]: 'DESC'
        }
    };
    const post = yield postRepository.find(options);
    return post;
});
exports.default = {
    getPostByFilter
};
// @EntityRepository(Post)
// export class PostRepository extends Repository<Post> {
//     public async getPostByFilter(filterBy: keyof StyleFilterSet): Promise<Post> {
//         const options: Object = {
//             relations: ["user"],
//             select: [
//                 "post_image_url",
//                 "profile_image_url",
//                 "nickname",
//                 "likes",
//                 "feed_text",
//                 "created_at"
//             ],
//             order: {
//                 [StyleFilterSet[filterBy]]: 'DESC'
//             }
//         }
//         return await this.findOneBy(options)
//     }
// }
