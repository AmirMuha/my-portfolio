import inputs from "./InputTypeMiddlewares";
import models from "./ModelMiddlewares";
import resolvers from "./ResolverMiddlewares";
import args from "./ArgsTypesMiddlewares";
import relations from "./RelationMiddlewares";
const applyMiddlewares = () => {
  inputs();
  args();
  models();
  resolvers();
  relations();
};

export default applyMiddlewares;
