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
exports.getArticleList = getArticleList;
exports.getArticleDetail = getArticleDetail;
exports.createArticle = createArticle;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
const prisma_1 = __importDefault(require("../config/prisma"));
function getArticleList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const articles = yield prisma_1.default.post.findMany();
            res.status(200).send({
                message: "fetch article list success",
                data: articles
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
            });
        }
    });
}
function getArticleDetail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const article = yield prisma_1.default.post.findUnique({
                where: {
                    id: Number(id)
                }
            });
            res.status(200).send({
                message: "fetch article detail success",
                data: article
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
            });
        }
    });
}
function createArticle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(" user session = ", res.locals.user);
            const { title, description, category } = req.body;
            const article = yield prisma_1.default.post.create({
                data: {
                    title,
                    description,
                    category
                }
            });
            res.status(200).send({
                message: "create article success",
                data: article
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
            });
        }
    });
}
function updateArticle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { title, description, category } = req.body;
            const article = yield prisma_1.default.post.update({
                where: {
                    id: Number(id)
                },
                data: {
                    title,
                    description,
                    category
                }
            });
            res.status(200).send({
                message: "update article success",
                data: article
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
            });
        }
    });
}
function deleteArticle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const article = yield prisma_1.default.post.delete({
                where: {
                    id: Number(id)
                }
            });
            res.status(200).send({
                message: "delete article success",
                data: article
            });
        }
        catch (err) {
            res.status(500).send({
                message: JSON.stringify(err),
            });
        }
    });
}
