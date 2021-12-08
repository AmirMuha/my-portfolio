import {EntityManager, EntityRepository, MikroORM} from "@mikro-orm/core"
import { Request, Response } from "express";

import {Admin} from "../entities/admin.entity"
import { Session } from "express-session";
import { SessionProps } from "./session.type";

interface RequestProps extends Request {
  session: SessionProps & Session;
}

export interface MyContext {
  req: RequestProps;
  res: Response;
  ORM: {
    em: EntityManager;
    orm: MikroORM;
    Admin: EntityRepository<Admin>;
  };
  data: any;
}
