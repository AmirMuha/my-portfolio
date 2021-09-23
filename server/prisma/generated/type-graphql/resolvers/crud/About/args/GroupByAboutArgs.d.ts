import { AboutOrderByWithAggregationInput } from "../../../inputs/AboutOrderByWithAggregationInput";
import { AboutScalarWhereWithAggregatesInput } from "../../../inputs/AboutScalarWhereWithAggregatesInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";
export declare class GroupByAboutArgs {
    where?: AboutWhereInput | undefined;
    orderBy?: AboutOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "body" | "admin_id" | "updatedAt">;
    having?: AboutScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
