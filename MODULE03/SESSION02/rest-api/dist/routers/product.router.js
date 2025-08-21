import express, {} from "express";
const router = express.Router();
// api/products/
router.get("/", (req, res) => {
    res.status(200).send({
        message: "list products",
        data: [
            {
                name: "NZTX black matte",
                price: 1500000
            }
        ]
    });
});
router.get("/:productId/price", (req, res, next) => {
    console.log(" handler 1 ");
    next();
}, (req, res, next) => {
    console.log(" handlder 2");
    next();
}, (req, res) => {
    res.sendStatus(502).send({
        message: 'Detail Product ID : ' + req.params.productId,
        data: {
            id: req.params.productId
        }
    });
});
export default router;
//# sourceMappingURL=product.router.js.map