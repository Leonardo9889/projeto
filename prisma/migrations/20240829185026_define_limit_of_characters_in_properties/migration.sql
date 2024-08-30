/*
  Warnings:

  - You are about to alter the column `numberPhone` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `cpfCnpj` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "numberPhone" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "cpfCnpj" SET DATA TYPE VARCHAR(20);
