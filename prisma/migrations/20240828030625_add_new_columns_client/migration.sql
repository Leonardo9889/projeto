/*
  Warnings:

  - Added the required column `cpfCnpj` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "cpfCnpj" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;
