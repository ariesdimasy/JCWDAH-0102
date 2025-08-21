import express, { type Request, type Response, type Application, type NextFunction } from "express"

const router = express.Router()

// api/products/
router.get("/", (req: Request, res: Response,) => {
    res.status(200).send({
        message: "list products",
        data: [
            {
                name: "NZTX black matte",
                price: 1500000
            }
        ]
    })
})

router.get("/:productId/price",
    (req: Request, res: Response, next: NextFunction) => {
        console.log(" handler 1 ")

        next()
    },
    (req: Request, res: Response, next: NextFunction) => {
        console.log(" handlder 2")

        next()
    },
    (req: Request, res: Response) => {
        res.sendStatus(502).send({
            message: 'Detail Product ID : ' + req.params.productId,
            data: {
                id: req.params.productId
            }
        })
    })

export default router