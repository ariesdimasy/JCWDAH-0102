import { Router, Request, Response } from "express";
import fsPromise from "fs/promises"

const router = Router()

// http://localhost:8002/api/expenses/abc/bcd
router.get("/", async (req: Request, res: Response) => {
    try {

        const read = await fsPromise.readFile("db/expense.json", "utf8")
        const data = JSON.parse(read)
        const expenses = data.expenses

        res.status(200).send({
            message: "success",
            data: expenses
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {

        const { id, title, date, nominal, type, category } = req.body

        const read = await fsPromise.readFile("db/expense.json", "utf8")
        const data = JSON.parse(read)
        const expenses = data.expenses

        expenses.push({
            id, title, date, nominal, type, category
        })

        const write = await fsPromise.writeFile("db/expense.json", JSON.stringify(data), "utf8")

        res.status(200).send({
            message: "success",
            data: expenses
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const { title, date, nominal, type, category } = req.body

        const read = await fsPromise.readFile("db/expense.json", "utf8")
        const data = JSON.parse(read)
        let expenses = data.expenses

        const fi = expenses.findIndex((item: any) => {
            return id == item.id
        })

        // findExpense.id = id
        expenses[fi].title = title
        expenses[fi].nominal = nominal
        expenses[fi].date = date
        expenses[fi].category = category
        expenses[fi].type = type

        await fsPromise.writeFile("db/expense.json", JSON.stringify(expenses), "utf8")

        res.status(200).send({
            message: "success",
            data: expenses
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
})

export default router