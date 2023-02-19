import { Request,Response,NextFunction } from 'express';
import errMessages from './errorMessages';

interface AddStatusCodeType extends Error{
    statusCode: number;
    message: string;
    }

const catchAsync = (func: any) => {
	return (req: Request, res: Response, next:NextFunction) => {
		func(req, res, next).catch((error:AddStatusCodeType) => next({
            statusCode : errMessages[error.message]?.statusCode,
            message : errMessages[error.message]?.message
        }))
	}
}

const globalErrorHandler = (err:AddStatusCodeType, req:Request, res:Response, next:NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "UNDEFINED_ERROR";
    res.status(err.statusCode).json({ error : true, message : err.message })
}


export { catchAsync, globalErrorHandler}