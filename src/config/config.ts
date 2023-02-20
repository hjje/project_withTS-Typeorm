import * as dotenv from 'dotenv';
dotenv.config();

//한번 분리를 해주고 type을 정확히 달아주면 된다.
type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  [key: string]: string|undefined,
}

//ConfigGroup으로 안하고 IConfigGrouup으로 하는이유 : IConfigGroup은 어떻게보면 Interface를 중복하는 느낌이지만 typescript convention
//상에 쓰이기때문에 붙혀준다 (개인의 선호차이)
interface IConfigGroup{
  development: Config;
  test: Config;
  production: Config;
}

//module.exports
const config: IConfigGroup = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "icecreamDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "icecreamDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "icecreamDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};




export default config;