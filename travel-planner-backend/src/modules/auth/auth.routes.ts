import { Router } from "express";
import { handleSignup, handleLogin } from "./auth.controller";

export const authRoutes = Router();

authRoutes.post("/signup", handleSignup);
authRoutes.post("/login", handleLogin);
