export const getGraphqlErrors = (obj: any): string[] => {
  if (obj.errors && obj.graphQLErrors) {
    return ["Unknown Error: Something went wrong, try again later."]
  }
  const allErrors: string[] = []
  for(const err of obj[obj.errors ? "errors" : "graphQLErrors"]) {
    const children: any[] =
      err.extensions.exception
        .validationErrors[0].children
    for (const child of children) {
      const property = child.property
      const constraints = child.constraints
      for (const con in constraints) {
        allErrors.push(`Error in ${property}: ${constraints[con]}`)
      }
    }
  }
  return allErrors
}
