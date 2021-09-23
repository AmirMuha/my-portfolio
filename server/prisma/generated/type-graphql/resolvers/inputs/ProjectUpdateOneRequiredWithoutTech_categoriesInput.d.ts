import { ProjectCreateOrConnectWithoutTech_categoriesInput } from "../inputs/ProjectCreateOrConnectWithoutTech_categoriesInput";
import { ProjectCreateWithoutTech_categoriesInput } from "../inputs/ProjectCreateWithoutTech_categoriesInput";
import { ProjectUpdateWithoutTech_categoriesInput } from "../inputs/ProjectUpdateWithoutTech_categoriesInput";
import { ProjectUpsertWithoutTech_categoriesInput } from "../inputs/ProjectUpsertWithoutTech_categoriesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateOneRequiredWithoutTech_categoriesInput {
    create?: ProjectCreateWithoutTech_categoriesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutTech_categoriesInput | undefined;
    upsert?: ProjectUpsertWithoutTech_categoriesInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
    update?: ProjectUpdateWithoutTech_categoriesInput | undefined;
}
