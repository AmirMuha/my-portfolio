import { TechCategoryCreateOrConnectWithoutTechsInput } from "../inputs/TechCategoryCreateOrConnectWithoutTechsInput";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";
export declare class TechCategoryCreateNestedOneWithoutTechsInput {
    create?: TechCategoryCreateWithoutTechsInput | undefined;
    connectOrCreate?: TechCategoryCreateOrConnectWithoutTechsInput | undefined;
    connect?: TechCategoryWhereUniqueInput | undefined;
}
