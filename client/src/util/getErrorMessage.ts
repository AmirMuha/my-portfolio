import { getGraphqlErrors } from './getGraphqlErrors';
export const getErrorMessage = (e: any):string => {
  return getGraphqlErrors(e).join("\n")
}
