import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

// Endpoint test - thjesht për ta parë serverin duke punuar
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Endpoint test real - kontrollon që lidhja me database funksionon
app.get("/health/db", async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    res.json({ status: "ok", users: userCount });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "Database connection failed" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
