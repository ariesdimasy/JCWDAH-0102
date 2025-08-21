"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todos = [
    {
        id: 1,
        title: "Belajar PHP 3 jam",
        done: false
    },
    {
        id: 2,
        title: "Belajar Javascript dan node js selama 3 jam ",
        done: true
    }
];
router.get("/", (req, res) => {
    res.status(200).send({
        message: "get todos success",
        data: todos
    });
});
exports.default = router;
