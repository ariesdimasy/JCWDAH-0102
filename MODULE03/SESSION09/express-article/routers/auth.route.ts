import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validationRegister } from "../middlewares/auth.middleware";

const router = Router()

router.post("/login", login)
router.post("/register", validationRegister, register)

export default router