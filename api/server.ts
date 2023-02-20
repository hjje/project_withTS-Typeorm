import dotenv from 'dotenv';
import { createApp } from '../api/app';
import appDataSource from './dataSource';

dotenv.config();

const setServer = async(): Promise<void> => {
    const app = createApp();
    const PORT = process.env.PORT;

    appDataSource
    .initialize()
    .then(() => {
        console.log("Data Soure has been initialized")
    })
    .catch(() => {
        console.log("Error: Data Source initialization has been failed")
    })

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
}

setServer();