-- CreateTable
CREATE TABLE "public"."stundent" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stundent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stundent_username_key" ON "public"."stundent"("username");

-- CreateIndex
CREATE UNIQUE INDEX "stundent_email_key" ON "public"."stundent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "stundent_password_key" ON "public"."stundent"("password");
