import { TechCategoryOrderByWithAggregationInput } from "../../../inputs/TechCategoryOrderByWithAggregationInput";
import { TechCategoryScalarWhereWithAggregatesInput } from "../../../inputs/TechCategoryScalarWhereWithAggregatesInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";
export declare class GroupByTechCategoryArgs {
    where?: TechCategoryWhereInput | undefined;
    orderBy?: TechCategoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "project_id">;
    having?: TechCategoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
