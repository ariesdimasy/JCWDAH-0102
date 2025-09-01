"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const article_route_1 = __importDefault(require("./routers/article.route"));
const PORT = 8800;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/articles", article_route_1.default);
app.get("/", (req, res) => {
    res.send({
        "message": "Welcome to API articles"
    });
});
app.listen(PORT, () => {
    console.log("application running on port : ", PORT);
});
