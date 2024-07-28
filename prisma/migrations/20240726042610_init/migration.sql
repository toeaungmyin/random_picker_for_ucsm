-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "mkpt" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "picked_at" TIMESTAMP(3),
    "possibility" INTEGER NOT NULL DEFAULT 50,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_mkpt_key" ON "Item"("mkpt");
