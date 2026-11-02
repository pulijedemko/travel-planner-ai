import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET!;
const SALT_ROUNDS = 10;

interface SignupInput {
  fullName: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export async function signup({ fullName, email, password }: SignupInput) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("EMAIL_ALREADY_EXISTS");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: { fullName, email, password: hashedPassword },
  });

  const token = generateToken(user.id);

  return {
    token,
    user: { id: user.id, fullName: user.fullName, email: user.email },
  };
}

export async function login({ email, password }: LoginInput) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = generateToken(user.id);

  return {
    token,
    user: { id: user.id, fullName: user.fullName, email: user.email },
  };
}

function generateToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}
