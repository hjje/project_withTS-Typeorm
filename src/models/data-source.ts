import { DataSource } from "typeorm";
import { User } from "../migrations/User";
// import config from '../config/config';
require("dotenv").config();

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3000,
  username: "root",
  password: "Qwer!234",
  database: "icecream_test_db",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
})