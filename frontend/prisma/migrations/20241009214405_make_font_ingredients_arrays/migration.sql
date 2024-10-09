/*
  Warnings:

  - The `ingredientes` column on the `Receita` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `font` column on the `Receita` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Receita" DROP COLUMN "ingredientes",
ADD COLUMN     "ingredientes" TEXT[],
DROP COLUMN "font",
ADD COLUMN     "font" TEXT[];
