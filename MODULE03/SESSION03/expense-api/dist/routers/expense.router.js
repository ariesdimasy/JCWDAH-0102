"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promises_1 = __importDefault(require("fs/promises"));
const router = (0, express_1.Router)();
// http://localhost:8002/api/expenses/abc/bcd
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const read = yield promises_1.default.readFile("db/expense.json", "utf8");
        const data = JSON.parse(read);
        const expenses = data.expenses;
        res.status(200).send({
            message: "success",
            data: expenses
        });
    }
    catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, title, date, nominal, type, category } = req.body;
        const read = yield promises_1.default.readFile("db/expense.json", "utf8");
        const data = JSON.parse(read);
        const expenses = data.expenses;
        expenses.push({
            id, title, date, nominal, type, category
        });
        const write = yield promises_1.default.writeFile("db/expense.json", JSON.stringify(data), "utf8");
        res.status(200).send({
            message: "success",
            data: expenses
        });
    }
    catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, date, nominal, type, category } = req.body;
        const read = yield promises_1.default.readFile("db/expense.json", "utf8");
        const data = JSON.parse(read);
        let expenses = data.expenses;
        const fi = expenses.findIndex((item) => {
            return id == item.id;
        });
        // findExpense.id = id
        expenses[fi].title = title;
        expenses[fi].nominal = nominal;
        expenses[fi].date = date;
        expenses[fi].category = category;
        expenses[fi].type = type;
        yield promises_1.default.writeFile("db/expense.json", JSON.stringify(expenses), "utf8");
        res.status(200).send({
            message: "success",
            data: expenses
        });
    }
    catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        });
    }
}));
exports.default = router;
