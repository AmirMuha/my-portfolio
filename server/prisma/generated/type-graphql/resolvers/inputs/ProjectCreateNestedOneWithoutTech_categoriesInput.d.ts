import { ProjectCreateOrConnectWithoutTech_categoriesInput } from "../inputs/ProjectCreateOrConnectWithoutTech_categoriesInput";
import { ProjectCreateWithoutTech_categoriesInput } from "../inputs/ProjectCreateWithoutTech_categoriesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedOneWithoutTech_categoriesInput {
    create?: ProjectCreateWithoutTech_categoriesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutTech_categoriesInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
}
