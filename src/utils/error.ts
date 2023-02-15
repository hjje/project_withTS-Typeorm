import errMessages from './errorMessages';

const catchAsync = (func :any) => {
	return (req: any, res: any, next:any) => {
		func(req, res, next).catch((error) => next({
            statusCode : errMessages[error.message]?.statusCode,
            message : errMessages[error.message]?.message
        }))
	}
}

const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "UNDEFINED_ERROR";
    res.status(err.statusCode).json({ error : true, message : err.message })
}


export { catchAsync, globalErrorHandler}