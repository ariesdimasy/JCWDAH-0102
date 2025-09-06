import { Request, Response } from "express";
import prisma from "../config/prisma";
import { hash, genSalt, compare } from "bcrypt"
import { sign } from "jsonwebtoken";
import { transporter } from "../helpers/nodemailer";
// dotenv.config({ path: './../.env' })

export async function login(req: Request, res: Response) {
    try {

        const { email, password } = req.body

        const check = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!check) {
            return res.status(404).json({
                message: "email or password is invalid"
            })
        }

        const isValidPassword = await compare(password, check.password)

        if (!isValidPassword) {
            return res.status(404).json({
                message: "email or password is invalid 2"
            })
        }

        const jwtPayload = { id: check.id, email: check.email, role: check.role }
        console.log(" jwtPayload : ", jwtPayload)
        const token = await sign(jwtPayload, "myScretKey", { expiresIn: '1h' })

        res.status(200).send({
            message: "login success",
            data: {
                id: check?.id,
                name: check?.name,
                email: check?.email,
                token: token
            }
        })

    } catch (err) {
        console.log(err)
        res.status(200).send({
            message: JSON.stringify(err),
            data: null
        })
    }
}

export async function register(req: Request, res: Response) {
    try {

        const { name, email, password, password_confirm } = req.body

        if (password != password_confirm) {
            return res.status(400).send({
                message: "password and password_confirm must be same"
            })
        }

        const checkEmail = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (checkEmail) {
            return res.status(400).send({
                message: "email already exists"
            })
        }

        const salt = await genSalt(10)
        const hashPassword = await hash(password, salt);

        const reg = await prisma.user.create({
            data: {
                name, email, password: hashPassword
            }
        })

        await transporter.sendMail({
            from: "alhusna901@gmail.com",
            to: email,
            subject: "thanks for register",
            html: "welcome to our site"
        })

        res.status(200).send({
            message: "register success",
            data: reg
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err),
            data: null
        })
    }
}