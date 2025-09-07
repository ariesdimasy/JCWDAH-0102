import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
// import { Prisma } from '../config/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(`[Error] ${err.name} : ${err.message}`)
    if (err.stack) console.log(err.stack)

    if (err instanceof PrismaClientKnownRequestError) {
        return res.status(400).json({ message: err.message, code: err.code })
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message })
    }

    return res.status(500).json({
        message: "Internal server error",
        detail: err.message || "Something went wrong"
    })
}