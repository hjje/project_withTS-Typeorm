"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const appDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: ['build/entities/*.{js,ts}'],
});
exports.default = appDataSource;
