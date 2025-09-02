import express, { Request, Response } from "express"
import articleRouter from "./routers/article.route"
import authRouter from "./routers/auth.route"

const PORT = 8800

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/articles", articleRouter)
app.use("/api/auth", authRouter)

app.get("/", (req: Request, res: Response) => {
    res.send({
        "message": "Welcome to API articles"
    })
})

app.listen(PORT, () => {
    console.log("application running on port : ", PORT)
})