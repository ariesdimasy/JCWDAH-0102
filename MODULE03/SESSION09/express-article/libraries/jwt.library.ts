import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import prisma from "./../config/prisma"
import pino from "pino";

const logger = pino()

export async function verityMyToken(req: Request, res: Response, next: NextFunction) {

    try {
        // console.log(req?.header("Authorization"))
        const token = req?.header("Authorization")?.replace("Bearer ", "") || ""
        // console.log(" token : ", token)
        // logHandleError(JSON.stringify(" something broken "))

        if (!token) {
            const errInfo = logger.info("Not Authenticated")
            return res.status(401).send({
                message: "Not Authenticated"
            })
        }

        const verifiedUser = verify(token, "myScretKey")

        if (!verifiedUser) {

            //next(verifiedUser)
            return res.status(401).send({
                message: "Not Authenticated"
            })
        }

        res.locals.user = verifiedUser

        next()
    } catch (err) {
        next(err)
    }


}

export async function adminGuard(req: Request, res: Response, next: NextFunction) {

    const user = res.locals.user

    if (user.role !== 'admin') {
        return res.status(401).send({
            message: "only admin can access this site"
        })
    }

    next()
}

export async function authorGuard(req: Request, res: Response, next: NextFunction) {

    const user = res.locals.user
    const postId = req.params.id

    const author = await prisma.post.findFirst({
        where: {
            user_id: user.id,
            id: Number(postId)
        }
    })

    if (!author) {
        return res.status(401).send({
            message: "you are not the author of this article"
        })
    }



    next()
}