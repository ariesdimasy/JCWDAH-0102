import { Router } from "express";
import { getAllStudents, getStudentDetail, createStudent, updateStudent, deleteStudent } from "../controllers/student.controller";

const router = Router()

router.get("/", getAllStudents)
router.get("/:id", getStudentDetail)
router.put("/:id", updateStudent)
router.delete("/:id", deleteStudent)
router.post("/", createStudent)

export default router