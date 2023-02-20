"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = exports.globalErrorHandler = void 0;
const catchAsync = func => {
    return (req, res, next) => {
        func(req, res, next).catch((error) => next({
            error
        }));
    };
};
exports.catchAsync = catchAsync;
const globalErrorHandler = (err, _req, res, _next) => {
    if (err) {
        return res.status(400).json({ message: 'Key Error' });
    }
    return res.status(500).json({ message: 'Internal Server Error!' });
};
exports.globalErrorHandler = globalErrorHandler;
