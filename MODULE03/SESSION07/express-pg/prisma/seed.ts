
// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const students = await prisma.student.created({
        data: {
            fullname: "Aries Dimas",
            username: "ariesdimasy",
            email: "ariesdimasy@gmail.com",
            password: 123456,
        }
    })

    console.log("new student ", students)
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });