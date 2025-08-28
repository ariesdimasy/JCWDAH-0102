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
exports.getAllStudents = getAllStudents;
exports.createStudent = createStudent;
const prismaObj_1 = __importDefault(require("../config/prismaObj"));
function getAllStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const students = yield prismaObj_1.default.student.findMany();
            res.status(200).json({
                message: "fetch students success",
                data: students
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err)
            });
        }
    });
}
function createStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, fullname, email, password } = req.body;
            const newStudent = yield prismaObj_1.default.student.create({
                data: {
                    username,
                    fullname,
                    email,
                    password,
                }
            });
            res.status(201).send({
                message: "create student success",
                data: newStudent
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err)
            });
        }
    });
}
