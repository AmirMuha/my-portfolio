import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Session } from "express-session";
import { SessionProps } from "./Session";

interface RequestProps extends Request {
  session: SessionProps & Session;
}

export interface MyContext {
  prisma: PrismaClient;
  req: RequestProps;
  res: Response;
  data: any;
}
