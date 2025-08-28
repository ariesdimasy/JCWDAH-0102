import { Request, Response } from "express";
import prisma from "../config/prismaObj";

// skip:0, page:1,
//.      page:2

export async function getAllStudents(req: Request, res: Response) {
    try {

        const { name, page, take } = req.query

        let where = {}

        if (typeof name === "string") {
            where = {
                fullname: {
                    contains: name
                }
            }
        }

        const students = await prisma.student.findMany({
            where: where,
            take: Number(take),
            skip: (Number(page) - 1) * Number(take)
        })

        res.status(200).json({
            message: "fetch students success",
            data: students
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
}

export async function getStudentDetail(req: Request, res: Response) {
    try {

        const { id } = req.params

        const student = await prisma.student.findUnique({
            where: {
                id: Number(id)
            }
        })

        res.status(200).json({
            message: "fetch student success",
            data: student
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
}

export async function createStudent(req: Request, res: Response) {
    try {

        const { username, fullname, email, password, classId } = req.body

        const newStudent = await prisma.student.create({
            data: {
                classId,
                username,
                fullname,
                email,
                password,
            }
        })

        res.status(201).send({
            message: "create student success",
            data: newStudent
        })


    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
}

export async function updateStudent(req: Request, res: Response) {
    try {

        const { fullname, username, email, password, classId } = req.body

        const { id } = req.params

        const update = await prisma.student.update({
            data: {
                classId,
                fullname,
                username,
                email,
                password,
            },
            where: {
                id: Number(id)
            }
        })

        res.status(201).send({
            message: "update student success",
            data: update
        })


    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
}

export async function deleteStudent(req: Request, res: Response) {
    try {

        const { id } = req.params

        const del = await prisma.student.delete({
            where: {
                id: Number(id)
            }
        })

        res.status(201).send({
            message: "delete student success",
            data: del
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
}
