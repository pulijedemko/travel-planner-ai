-- CreateEnum
CREATE TYPE "Budget" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "TimeOfDay" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "location" TEXT,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "coverImage" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "budget" "Budget" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItineraryDay" (
    "id" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "tripId" TEXT NOT NULL,

    CONSTRAINT "ItineraryDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItineraryActivity" (
    "id" TEXT NOT NULL,
    "timeOfDay" "TimeOfDay" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "dayId" TEXT NOT NULL,

    CONSTRAINT "ItineraryActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryDay" ADD CONSTRAINT "ItineraryDay_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryActivity" ADD CONSTRAINT "ItineraryActivity_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "ItineraryDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;
