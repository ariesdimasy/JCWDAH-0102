import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma";
import { memcachedClient } from "../config/memcached";
import logHandleError from "../middlewares/logHandleError.middleware";
import { AppError } from "../errors/AppError";

export async function getArticleList(req: Request, res: Response) {
    try {

        const checkKey = "posts"
        const cacheResult = await memcachedClient.get(checkKey)

        if (cacheResult.value) {
            const cachePosts = JSON.parse(cacheResult.value.toString())
            return res.status(200).json({
                message: "get articles success",
                data: cachePosts
            })
        }

        const articles = await prisma.post.findMany({

        })

        console.table(articles)

        await memcachedClient.set(checkKey, JSON.stringify(articles), {
            expires: 300
        })

        res.status(200).send({
            message: "fetch article list success",
            data: articles
        })

    } catch (err) {
        console.error(err)

        res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function getArticleDetail(req: Request, res: Response) {
    try {

        const { id } = req.params

        const article = await prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!article) {
            throw new AppError("User Not Found", 404, true)
        }

        res.status(200).send({
            message: "fetch article detail success",
            data: article
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function createArticle(req: Request, res: Response, next: NextFunction) {
    try {

        //console.log(" user session = ", res.locals.user)

        const { title, description, category } = req.body
        const { file } = req

        const article = await prisma.post.create({
            data: {
                title,
                description,
                category,
                user_id: res.locals.user.id,
                image: file?.filename
            }
        })

        res.status(200).send({
            message: "create article success",
            data: article
        })

    } catch (err) {

        res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function updateArticle(req: Request, res: Response) {
    try {

        const { id } = req.params
        const { title, description, category } = req.body

        const article = await prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                title,
                description,
                category
            }
        })

        res.status(200).send({
            message: "update article success",
            data: article
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function deleteArticle(req: Request, res: Response) {
    try {

        const { id } = req.params

        const article = await prisma.post.delete({
            where: {
                id: Number(id)
            }
        })

        res.status(200).send({
            message: "delete article success",
            data: article
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}
