import express, { type Request, type Response, type Application } from "express"

const PORT = 8000

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
    res.send({
        message: 'HOME',
        data: [

        ]
    })
})

app.get("/api", (req: Request, res: Response) => {
    res.send({
        message: 'API version 1.0',
        data: [
            { foo: "bar" }
        ]
    })
})

app.post("/")

app.delete("/")

app.put("/")

app.patch("/")

app.listen(PORT, () => {
    console.log("API run on port : ", PORT)
})