import inputs from "./InputTypeMiddlewares";
import models from "./ModelMiddlewares";
import resolvers from "./ResolverMiddlewares";
import args from "./ArgsTypesMiddlewares";
const applyMiddlewares = () => {
  inputs();
  args();
  models();
  resolvers();
};

export default applyMiddlewares;
