/*
  Warnings:

  - You are about to drop the `stundent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."stundent";

-- CreateTable
CREATE TABLE "public"."students" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_username_key" ON "public"."students"("username");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "public"."students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_password_key" ON "public"."students"("password");
