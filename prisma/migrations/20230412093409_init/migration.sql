-- CreateTable
CREATE TABLE "LocationStreet" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "userLocationId" INTEGER NOT NULL,

    CONSTRAINT "LocationStreet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationTimezone" (
    "id" SERIAL NOT NULL,
    "offset" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userLocationId" INTEGER NOT NULL,

    CONSTRAINT "LocationTimezone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LocationStreet_userLocationId_key" ON "LocationStreet"("userLocationId");

-- CreateIndex
CREATE UNIQUE INDEX "LocationTimezone_userLocationId_key" ON "LocationTimezone"("userLocationId");

-- AddForeignKey
ALTER TABLE "LocationStreet" ADD CONSTRAINT "LocationStreet_userLocationId_fkey" FOREIGN KEY ("userLocationId") REFERENCES "UserLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationTimezone" ADD CONSTRAINT "LocationTimezone_userLocationId_fkey" FOREIGN KEY ("userLocationId") REFERENCES "UserLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
