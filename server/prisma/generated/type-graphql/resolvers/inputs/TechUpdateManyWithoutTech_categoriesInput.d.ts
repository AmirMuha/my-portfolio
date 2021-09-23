import { TechCreateManyTech_categoriesInputEnvelope } from "../inputs/TechCreateManyTech_categoriesInputEnvelope";
import { TechCreateOrConnectWithoutTech_categoriesInput } from "../inputs/TechCreateOrConnectWithoutTech_categoriesInput";
import { TechCreateWithoutTech_categoriesInput } from "../inputs/TechCreateWithoutTech_categoriesInput";
import { TechScalarWhereInput } from "../inputs/TechScalarWhereInput";
import { TechUpdateManyWithWhereWithoutTech_categoriesInput } from "../inputs/TechUpdateManyWithWhereWithoutTech_categoriesInput";
import { TechUpdateWithWhereUniqueWithoutTech_categoriesInput } from "../inputs/TechUpdateWithWhereUniqueWithoutTech_categoriesInput";
import { TechUpsertWithWhereUniqueWithoutTech_categoriesInput } from "../inputs/TechUpsertWithWhereUniqueWithoutTech_categoriesInput";
import { TechWhereUniqueInput } from "../inputs/TechWhereUniqueInput";
export declare class TechUpdateManyWithoutTech_categoriesInput {
    create?: TechCreateWithoutTech_categoriesInput[] | undefined;
    connectOrCreate?: TechCreateOrConnectWithoutTech_categoriesInput[] | undefined;
    upsert?: TechUpsertWithWhereUniqueWithoutTech_categoriesInput[] | undefined;
    createMany?: TechCreateManyTech_categoriesInputEnvelope | undefined;
    connect?: TechWhereUniqueInput[] | undefined;
    set?: TechWhereUniqueInput[] | undefined;
    disconnect?: TechWhereUniqueInput[] | undefined;
    delete?: TechWhereUniqueInput[] | undefined;
    update?: TechUpdateWithWhereUniqueWithoutTech_categoriesInput[] | undefined;
    updateMany?: TechUpdateManyWithWhereWithoutTech_categoriesInput[] | undefined;
    deleteMany?: TechScalarWhereInput[] | undefined;
}
