import express, { Request, Response, Application } from "express"
import TodoRouter from "./routers/todo.router"

const app: Application = express()
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/todos", TodoRouter)

app.get("/api", (req: Request, res: Response) => {
    res.status(200).send({
        message: " API "
    })
})

app.listen(PORT, () => {
    console.log("application running on port : ", PORT)
})