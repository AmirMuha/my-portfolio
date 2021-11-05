export const getGraphqlErrors = (obj: any): string[] => {
  const children: any[] = obj.errors[0].extensions.exception.validationErrors[0].children
  const allErrors: string[] = [];
  for(const child of children){
    const property = child.property
    const constraints = child.constraints
    for(const con in constraints) {
      allErrors.push(`Error in ${property}: ${constraints[con]}`)
    }
  }
  return allErrors;
};
