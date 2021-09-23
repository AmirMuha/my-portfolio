import { TechOrderByWithAggregationInput } from "../../../inputs/TechOrderByWithAggregationInput";
import { TechScalarWhereWithAggregatesInput } from "../../../inputs/TechScalarWhereWithAggregatesInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";
export declare class GroupByTechArgs {
    where?: TechWhereInput | undefined;
    orderBy?: TechOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "tech_category_id">;
    having?: TechScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
