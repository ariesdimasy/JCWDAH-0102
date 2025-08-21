import express, { Request, Response } from "express";

const router = express.Router()

const todos = [
    {
        id: 1,
        title: "Belajar PHP 3 jam",
        done: false
    },
    {
        id: 2,
        title: "Belajar Javascript dan node js selama 3 jam ",
        done: true
    }
]

router.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "get todos success",
        data: todos
    })
})

export default router