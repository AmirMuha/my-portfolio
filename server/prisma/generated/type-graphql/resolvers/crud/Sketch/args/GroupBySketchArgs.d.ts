import { SketchOrderByWithAggregationInput } from "../../../inputs/SketchOrderByWithAggregationInput";
import { SketchScalarWhereWithAggregatesInput } from "../../../inputs/SketchScalarWhereWithAggregatesInput";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";
export declare class GroupBySketchArgs {
    where?: SketchWhereInput | undefined;
    orderBy?: SketchOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "body" | "download_link" | "image" | "project_id">;
    having?: SketchScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
