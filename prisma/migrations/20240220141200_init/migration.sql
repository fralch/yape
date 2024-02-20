-- CreateTable
CREATE TABLE "Transaccion" (
    "transaccion_id" SERIAL NOT NULL,
    "transaccion_external_id" TEXT NOT NULL,
    "account_external_id_debit" TEXT NOT NULL,
    "account_external_id_credit" TEXT NOT NULL,
    "transfer_type_id" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "status" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("transaccion_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaccion_transaccion_external_id_key" ON "Transaccion"("transaccion_external_id");
