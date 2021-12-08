import { ResolverData } from "type-graphql";
import { MyContext } from "./myContext.type";

export interface Props extends ResolverData {
  context: MyContext;
}
