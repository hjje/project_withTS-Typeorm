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
const postService_1 = __importDefault(require("../services/postService"));
const error_1 = require("../utils/error");
const getPostByFilter = (0, error_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // array?
    const filterBy = req.query.filterBy;
    if (!filterBy)
        throw new Error('keyErr');
    const posts = yield postService_1.default.getPostByFilter(filterBy);
    return res.status(200).json({ posts });
}));
exports.default = { getPostByFilter };
