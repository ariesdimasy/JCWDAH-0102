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
exports.login = login;
exports.register = register;
const prisma_1 = __importDefault(require("../config/prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
// dotenv.config({ path: './../.env' })
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const check = yield prisma_1.default.user.findFirst({
                where: {
                    email
                }
            });
            if (!check) {
                return res.status(404).json({
                    message: "email or password is invalid"
                });
            }
            const isValidPassword = yield (0, bcrypt_1.compare)(password, check.password);
            if (!isValidPassword) {
                return res.status(404).json({
                    message: "email or password is invalid 2"
                });
            }
            const jwtPayload = { email: check.email, role: check.role };
            const token = yield (0, jsonwebtoken_1.sign)(jwtPayload, "myScretKey", { expiresIn: '1h' });
            res.status(200).send({
                message: "login success",
                data: {
                    name: check === null || check === void 0 ? void 0 : check.name,
                    email: check === null || check === void 0 ? void 0 : check.email,
                    token: token
                }
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
                data: null
            });
        }
    });
}
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password, password_confirm } = req.body;
            if (password != password_confirm) {
                return res.status(400).send({
                    message: "password and password_confirm must be same"
                });
            }
            const checkEmail = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (checkEmail) {
                return res.status(400).send({
                    message: "email already exists"
                });
            }
            const salt = yield (0, bcrypt_1.genSalt)(10);
            const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
            const reg = yield prisma_1.default.user.create({
                data: {
                    name, email, password: hashPassword
                }
            });
            res.status(200).send({
                message: "register success",
                data: reg
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
                data: null
            });
        }
    });
}
