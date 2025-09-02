import { Router } from "express";
import { createArticle, deleteArticle, getArticleDetail, getArticleList, updateArticle } from "../controllers/article.controller";
import { verifyToken } from "../libraries/jwt.library";

const router = Router()

router.get("/", getArticleList)
router.get("/:id", getArticleDetail)
router.post("/", verifyToken, createArticle)
router.put("/:id", verifyToken, updateArticle)
router.delete("/:id", verifyToken, deleteArticle)

export default router