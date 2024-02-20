/*
  Warnings:

  - You are about to drop the column `transfer_type_id` on the `Transaccion` table. All the data in the column will be lost.
  - Added the required column `transfer_type` to the `Transaccion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaccion_transaccion_external_id_key";

-- AlterTable
ALTER TABLE "Transaccion" DROP COLUMN "transfer_type_id",
ADD COLUMN     "transfer_type" INTEGER NOT NULL;
