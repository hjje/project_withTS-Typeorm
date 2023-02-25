"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
exports.routes = routes;
const userRouter_1 = __importDefault(require("./userRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
// import productRouter from './productRouter'
routes.use('/users', userRouter_1.default.routes);
routes.use('/posts', postRouter_1.default.routes);
