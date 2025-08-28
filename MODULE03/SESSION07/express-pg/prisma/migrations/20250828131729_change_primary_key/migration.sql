-- AlterTable
CREATE SEQUENCE "public".students_id_seq;
ALTER TABLE "public"."students" ALTER COLUMN "id" SET DEFAULT nextval('"public".students_id_seq');
ALTER SEQUENCE "public".students_id_seq OWNED BY "public"."students"."id";
