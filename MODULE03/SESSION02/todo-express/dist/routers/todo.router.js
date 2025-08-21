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
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
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
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // db/todo.json
    const readJSON = yield promises_1.default.readFile("db/todo.json", "utf8");
    const todos = JSON.parse(readJSON);
    res.status(200).send({
        message: "get todos success",
        data: todos === null || todos === void 0 ? void 0 : todos.todos
    });
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, done } = req.body;
    // db/todo.json
    const readJSON = yield promises_1.default.readFile("db/todo.json", "utf8");
    const data = JSON.parse(readJSON); // array of object
    data.todos.push({
        id, title, done
    });
    yield promises_1.default.writeFile("db/todo.json", JSON.stringify(data), {
        encoding: 'utf8'
    });
    res.status(200).send({
        message: "get todos success",
        data: data === null || data === void 0 ? void 0 : data.todos
    });
}));
exports.default = router;
