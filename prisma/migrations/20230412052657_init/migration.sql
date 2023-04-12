-- CreateTable
CREATE TABLE "UserIdentifier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "UserIdentifier_pkey" PRIMARY KEY ("id")
);
