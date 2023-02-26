import { NextFunction, Request, Response } from "express";

const catchAsync = func => {
    return(req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch((error) => next({
            error
        }))
    }
};

const globalErrorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
): Response => {
    if(err) {
        return res.status(400).json({ message: 'Key Error' })
    }
    return res.status(500).json({ message: 'Internal Server Error!'})
};

export { globalErrorHandler, catchAsync };