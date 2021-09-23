import { ResolverData } from "type-graphql";
import { MyContext } from "./MyContext";

export interface Props extends ResolverData {
  context: MyContext;
}
