import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "alhusna901@gmail.com",
        pass: "dagf ukpo shyc jxfo"
    }
})