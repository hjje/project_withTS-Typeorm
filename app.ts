require("dotenv").config();

import express from 'express';
//export default 가 없으면 * as
import { Request, Response, NextFunction, Application } from 'express';
import cors from "cors";
import morgan from "morgan";

import { routes } from "./src/routes";
import { globalErrorHandler } from "./src/utils/error";

export const createApp = (): Application => {
  const app = express();

  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(routes);
  app.use(globalErrorHandler);
  
  app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message : "pong?" });
  })

  return app;
};
