import { Router } from "express";
import { createArticle, deleteArticle, getArticleDetail, getArticleList, updateArticle } from "../controllers/article.controller";

const router = Router()

router.get("/", getArticleList)
router.get("/:id", getArticleDetail)
router.post("/", createArticle)
router.put("/:id", updateArticle)
router.delete("/:id", deleteArticle)

export default router