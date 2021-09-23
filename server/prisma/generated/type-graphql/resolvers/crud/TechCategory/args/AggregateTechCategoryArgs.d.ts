import { TechCategoryOrderByWithRelationInput } from "../../../inputs/TechCategoryOrderByWithRelationInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";
export declare class AggregateTechCategoryArgs {
    where?: TechCategoryWhereInput | undefined;
    orderBy?: TechCategoryOrderByWithRelationInput[] | undefined;
    cursor?: TechCategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
