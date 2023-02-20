import { DataSource } from 'typeorm';

const appDataSource = new DataSource({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: ['build/entities/*.{js,ts}'],
})

export default appDataSource;