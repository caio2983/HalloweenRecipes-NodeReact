/*
  Warnings:

  - Added the required column `font` to the `Receita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receita" ADD COLUMN     "font" TEXT NOT NULL;
