import express, { Request, Response, Application } from "express"
import expenseRoute from "./routers/expense.router"

const app: Application = express()
const PORT = 8002

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/api/expenses", expenseRoute)

app.get("/api", (req: Request, res: Response) => {
    res.json({
        message: "success",
        data: "API"
    })
})

app.listen(PORT, () => {
    console.log(" app running on port : ", PORT)
})