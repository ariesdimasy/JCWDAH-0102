"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_router_1 = __importDefault(require("./routers/expense.router"));
const app = (0, express_1.default)();
const PORT = 8002;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use("/api/expenses", expense_router_1.default);
app.get("/api", (req, res) => {
    res.json({
        message: "success",
        data: "API"
    });
});
app.listen(PORT, () => {
    console.log(" app running on port : ", PORT);
});
