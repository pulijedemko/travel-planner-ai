import type { Request, Response } from "express";
import * as authService from "./auth.service";

export async function handleSignup(req: Request, res: Response) {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ message: "fullName, email and password are required" });
  }

  try {
    const result = await authService.signup({ fullName, email, password });
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_ALREADY_EXISTS") {
      return res
        .status(409)
        .json({ message: "An account with this email already exists" });
    }
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function handleLogin(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }

  try {
    const result = await authService.login({ email, password });
    res.json(result);
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
