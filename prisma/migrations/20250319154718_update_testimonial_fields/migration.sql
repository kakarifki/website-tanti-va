/*
  Warnings:

  - Added the required column `profession` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
