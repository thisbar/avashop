import {StatusCodes} from "http-status-codes";
import HttpDomainError from "../../Domain/HttpDomainError";
import { Request, Response, NextFunction } from 'express';
import type { ErrorRequestHandler } from "express";
import {ValidationErrorItem} from "sequelize";
type ErrorTypes = Error | HttpDomainError;

const errorMiddleware: ErrorRequestHandler = (error: ErrorTypes, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error) {
        let httpStatus = StatusCodes.INTERNAL_SERVER_ERROR;

        if ("httpStatus" in error && error.httpStatus) {
           httpStatus = error.httpStatus;
        }



        return res.status(httpStatus)
            .json({
                errors: [{'msg': error.message}],
            });

    }

    next(error);
};

export default errorMiddleware;