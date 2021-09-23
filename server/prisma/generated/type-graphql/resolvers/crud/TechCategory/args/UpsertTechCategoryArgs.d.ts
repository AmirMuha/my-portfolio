import { TechCategoryCreateInput } from "../../../inputs/TechCategoryCreateInput";
import { TechCategoryUpdateInput } from "../../../inputs/TechCategoryUpdateInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";
export declare class UpsertTechCategoryArgs {
    where: TechCategoryWhereUniqueInput;
    create: TechCategoryCreateInput;
    update: TechCategoryUpdateInput;
}
