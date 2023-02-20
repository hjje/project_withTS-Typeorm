"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const userRouter_1 = __importDefault(require("./userRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
routes.use('/users', userRouter_1.default.routes);
routes.use('/posts', postRouter_1.default.routes);
exports.default = routes;
