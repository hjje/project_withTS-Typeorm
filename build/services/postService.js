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
const post_repository_1 = require("../repositories/post.repository");
const dataSource_1 = __importDefault(require("../dataSource"));
const getPostByFilter = (filterBy) => __awaiter(void 0, void 0, void 0, function* () {
    const postRepository = dataSource_1.default.getCustomRepository(post_repository_1.PostRepository);
    return postRepository.getPostByFilter(filterBy);
});
exports.default = { getPostByFilter };
