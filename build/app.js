"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("../api/routes");
// dotenv -> 지금 내가 어떤 환경에 있는지
dotenv_1.default.config();
const createApp = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('tiny'));
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    //app.use(globalErrorHandler)
    app.get('/ping', (req, res) => {
        res.status(200).json({ message: 'pong' });
    });
    return app;
};
exports.createApp = createApp;
