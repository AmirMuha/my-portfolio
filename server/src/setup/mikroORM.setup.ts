import "reflect-metadata";

import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";

import { Admin } from "../entities/admin.entity";
import mikroOrmConfig from "../../mikro-orm.config";

export interface ORMParamTypes {
  em: EntityManager;
  orm: MikroORM;
  Admin: EntityRepository<Admin>;
}
export const setupMikroORM = async () => {
  const ORM = {} as ORMParamTypes;
  const orm = await MikroORM.init(mikroOrmConfig);
  ORM.orm = orm;
  ORM.em = orm.em;
  ORM.Admin = orm.em.getRepository(Admin);


  return ORM;
};
