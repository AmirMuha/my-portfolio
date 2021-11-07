import { getErrorMessage } from "./getErrorMessage"
import { useEffect } from "react"
type SetAlertTypes = (props: {isOpen: boolean,title :string,message: string}) => void
/**
  @description accepts 3 arguments, and triggers the setAlert function to show the errors

  @param error: GraphQLError
  @param loading: GraphqlLoading
  @param setAlert: setAlert function from useAlert() hook
  @param optionalFn useAlertGraphqlError hook calls this function for you after setting the Alert

  @returns void
*/
export const useAlertGraphqlError = (error: any, loading: boolean, setAlert: SetAlertTypes,optionalFn?: () => void) => {
  useEffect(() => {
    if (error && !loading) {
      setAlert({
        isOpen: true,
        title: "Error",
        message:
          (error && getErrorMessage(error)) ||
          "Unknown Error: Something went wrong.",
      })
      if(optionalFn) {
        optionalFn()
      }
    }
  }, [error, loading])
}
