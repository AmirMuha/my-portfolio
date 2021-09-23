import { TechCategoryCreateOrConnectWithoutTechsInput } from "../inputs/TechCategoryCreateOrConnectWithoutTechsInput";
import { TechCategoryCreateWithoutTechsInput } from "../inputs/TechCategoryCreateWithoutTechsInput";
import { TechCategoryUpdateWithoutTechsInput } from "../inputs/TechCategoryUpdateWithoutTechsInput";
import { TechCategoryUpsertWithoutTechsInput } from "../inputs/TechCategoryUpsertWithoutTechsInput";
import { TechCategoryWhereUniqueInput } from "../inputs/TechCategoryWhereUniqueInput";
export declare class TechCategoryUpdateOneRequiredWithoutTechsInput {
    create?: TechCategoryCreateWithoutTechsInput | undefined;
    connectOrCreate?: TechCategoryCreateOrConnectWithoutTechsInput | undefined;
    upsert?: TechCategoryUpsertWithoutTechsInput | undefined;
    connect?: TechCategoryWhereUniqueInput | undefined;
    update?: TechCategoryUpdateWithoutTechsInput | undefined;
}
