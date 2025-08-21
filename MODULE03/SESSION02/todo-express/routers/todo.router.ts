import express, { Request, Response } from "express";
import fsPromise from "fs/promises"

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

router.get("/", async (req: Request, res: Response) => {
    // db/todo.json
    const readJSON = await fsPromise.readFile("db/todo.json", "utf8")
    const todos = JSON.parse(readJSON)

    res.status(200).send({
        message: "get todos success",
        data: todos?.todos
    })
})

router.post("/", async (req: Request, res: Response) => {
    const { id, title, done } = req.body
    // db/todo.json
    const readJSON = await fsPromise.readFile("db/todo.json", "utf8")
    const data = JSON.parse(readJSON) // array of object
    data.todos.push({
        id, title, done
    })

    await fsPromise.writeFile("db/todo.json", JSON.stringify(data), {
        encoding: 'utf8'
    })

    res.status(200).send({
        message: "get todos success",
        data: data?.todos
    })
})

export default router