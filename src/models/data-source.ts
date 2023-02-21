import { DataSource } from "typeorm";
// import config from '../config/config';
require("dotenv").config();

export const appDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3000,
  username: "root",
  password: "Qwer!234",
  database: "icecreamDB",
  synchronize: true,
  logging: true,
  // entities: [User],
  // subscribers: [],
  // migrations: [],
})