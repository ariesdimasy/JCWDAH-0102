import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator"

export const validationRegister = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email must be valid"),
    body("password").isLength({
        min: 8
    }).withMessage(" password min 8 chars "),
    body("password_confirm").custom((value, { req }) => {
        if (req.body.password != value) {
            throw new Error('Password confirmation does not match password');
        }
        return true
    }),
    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({
                errors: error.array()
            })
        }

        next()
    }
]