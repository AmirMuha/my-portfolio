import { TechCategoryCreateManyProjectInputEnvelope } from "../inputs/TechCategoryCreateManyProjectInputEnvelope";
import { TechCategoryCreateOrConnectWithoutProjectInput } from "../inputs/TechCategoryCreateOrConnectWithoutProjectInput";
import { TechCategoryCreateWithoutProjectInput } from "../inputs/TechCategoryCreateWithoutProjectInput";
import { TechCategoryScalarWhereInput } from "../inputs/TechCategoryScalarWhereInput";
import { TechCategoryUpdateManyWithWhereWithoutProjectInput } from "../inputs/TechCategoryUpdateManyWithWhereWithoutProjectInput";
import { TechCategoryUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TechCategoryUpdateWithWhereUniqueWithoutProjectInput";
import { TechCategoryUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TechCategoryUpsertWithWhereUniqueWithoutProjectInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";
export declare class TechCategoryUpdateManyWithoutProjectInput {
    create?: TechCategoryCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TechCategoryCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: TechCategoryUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    createMany?: TechCategoryCreateManyProjectInputEnvelope | undefined;
    connect?: TechCategoryWhereUniqueInput[] | undefined;
    set?: TechCategoryWhereUniqueInput[] | undefined;
    disconnect?: TechCategoryWhereUniqueInput[] | undefined;
    delete?: TechCategoryWhereUniqueInput[] | undefined;
    update?: TechCategoryUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: TechCategoryUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: TechCategoryScalarWhereInput[] | undefined;
}
