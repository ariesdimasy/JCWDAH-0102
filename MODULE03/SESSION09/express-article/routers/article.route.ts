import { Router } from "express";
import { createArticle, deleteArticle, getArticleDetail, getArticleList, updateArticle } from "../controllers/article.controller";
import { adminGuard, authorGuard, verityMyToken } from "../libraries/jwt.library";
import { uploader } from "../middlewares/uploader.middleware";

const router = Router()

router.get("/", getArticleList)
router.get("/:id", getArticleDetail)
router.post("/", verityMyToken, uploader("article-img", "/images").single("file"), createArticle)
router.put("/:id", verityMyToken, authorGuard, updateArticle)
router.delete("/:id", verityMyToken, authorGuard, deleteArticle)

export default router