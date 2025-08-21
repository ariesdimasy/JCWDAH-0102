import express, {} from "express";
const PORT = 8000;
const app = express();
app.get("/", (req, res) => {
    res.send({
        message: 'HOME',
        data: []
    });
});
app.get("/api", (req, res) => {
    res.send({
        message: 'API version 1.0',
        data: [
            { foo: "bar" }
        ]
    });
});
app.listen(PORT, () => {
    console.log("API run on port : ", PORT);
});
//# sourceMappingURL=index.js.map