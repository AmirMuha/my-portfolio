import { TechCreateManyTech_categoriesInputEnvelope } from "../inputs/TechCreateManyTech_categoriesInputEnvelope";
import { TechCreateOrConnectWithoutTech_categoriesInput } from "../inputs/TechCreateOrConnectWithoutTech_categoriesInput";
import { TechCreateWithoutTech_categoriesInput } from "../inputs/TechCreateWithoutTech_categoriesInput";
import { TechWhereUniqueInput } from "../inputs/TechWhereUniqueInput";
export declare class TechCreateNestedManyWithoutTech_categoriesInput {
    create?: TechCreateWithoutTech_categoriesInput[] | undefined;
    connectOrCreate?: TechCreateOrConnectWithoutTech_categoriesInput[] | undefined;
    createMany?: TechCreateManyTech_categoriesInputEnvelope | undefined;
    connect?: TechWhereUniqueInput[] | undefined;
}
