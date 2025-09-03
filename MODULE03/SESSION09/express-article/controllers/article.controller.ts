import { Request, Response } from "express";
import prisma from "../config/prisma";

export async function getArticleList(req: Request, res: Response) {
    try {

        const articles = await prisma.post.findMany()

        res.status(200).send({
            message: "fetch article list success",
            data: articles
        })

    } catch (err) {
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

export async function createArticle(req: Request, res: Response) {
    try {

        console.log(" user session = ", res.locals.user)

        const { title, description, category } = req.body

        const article = await prisma.post.create({
            data: {
                title,
                description,
                category,
                user_id: res.locals.user.id
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
