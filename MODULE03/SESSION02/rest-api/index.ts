import express, { type Request, type Response, type Application, type NextFunction } from "express"
import productRouter from "./routers/product.router.js"

const PORT = 8000

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/products", productRouter)
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("middleware level application")
    // next()
})

app.get("/", (req: Request, res: Response) => {
    try {
        res.send({
            message: 'HOME GET',
            data: {
                body: req.body,
                query: req.query
            }
        })
    } catch (err) {
        res.send({
            message: JSON.stringify(err),

        })
    }

})

app.get("/api", (req: Request, res: Response) => {
    res.send({
        message: 'API version 1.0',
        data: [
            { foo: "bar" }
        ]
    })
})



app.post("/", (req: Request, res: Response) => {
    res.send({
        message: 'HOME POST',
        data: {
            body: req.body,
            query: req.query
        }
    })
})

app.delete("/", (req: Request, res: Response) => {
    res.send({
        message: 'HOME DELETE',
    })
})

// app.put("/")

// app.patch("/")

app.listen(PORT, () => {
    console.log("API run on port : ", PORT)
})