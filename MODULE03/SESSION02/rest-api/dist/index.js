import express, {} from "express";
import productRouter from "./routers/product.router.js";
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter);
app.use((req, res, next) => {
    console.log("middleware level application");
    // next()
});
app.get("/", (req, res) => {
    try {
        res.send({
            message: 'HOME GET',
            data: {
                body: req.body,
                query: req.query
            }
        });
    }
    catch (err) {
        res.send({
            message: JSON.stringify(err),
        });
    }
});
app.get("/api", (req, res) => {
    res.send({
        message: 'API version 1.0',
        data: [
            { foo: "bar" }
        ]
    });
});
app.post("/", (req, res) => {
    res.send({
        message: 'HOME POST',
        data: {
            body: req.body,
            query: req.query
        }
    });
});
app.delete("/", (req, res) => {
    res.send({
        message: 'HOME DELETE',
    });
});
// app.put("/")
// app.patch("/")
app.listen(PORT, () => {
    console.log("API run on port : ", PORT);
});
//# sourceMappingURL=index.js.map