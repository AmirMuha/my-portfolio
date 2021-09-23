import { TechCategoryCreateManyProjectInputEnvelope } from "../inputs/TechCategoryCreateManyProjectInputEnvelope";
import { TechCategoryCreateOrConnectWithoutProjectInput } from "../inputs/TechCategoryCreateOrConnectWithoutProjectInput";
import { TechCategoryCreateWithoutProjectInput } from "../inputs/TechCategoryCreateWithoutProjectInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";
export declare class TechCategoryCreateNestedManyWithoutProjectInput {
    create?: TechCategoryCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TechCategoryCreateOrConnectWithoutProjectInput[] | undefined;
    createMany?: TechCategoryCreateManyProjectInputEnvelope | undefined;
    connect?: TechCategoryWhereUniqueInput[] | undefined;
}
