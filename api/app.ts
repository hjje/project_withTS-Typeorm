import dotenv from 'dotenv';

import express, { Application, Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { routes } from '../api/routes'
import { globalErrorHandler } from '../api/utils/error'

// dotenv -> 지금 내가 어떤 환경에 있는지
dotenv.config();

const createApp = (): Application => {
    const app: Express = express();

    app.use(cors());
    app.use(morgan('tiny'));
    app.use(express.json());
    app.use(routes);
    //app.use(globalErrorHandler)
    
    app.get('/ping', (req: Request, res: Response) => {
        res.status(200).json({ message: 'pong'});
    })
    
    return app;
};

export { createApp };

//github action 테스트용 주석
//github action 테스트용 주석 2번째