import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export interface MyContext {
  prisma: PrismaClient;
  req: Request;
}
