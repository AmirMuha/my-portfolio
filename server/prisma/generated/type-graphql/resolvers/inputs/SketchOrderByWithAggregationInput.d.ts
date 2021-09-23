import { SketchCountOrderByAggregateInput } from "../inputs/SketchCountOrderByAggregateInput";
import { SketchMaxOrderByAggregateInput } from "../inputs/SketchMaxOrderByAggregateInput";
import { SketchMinOrderByAggregateInput } from "../inputs/SketchMinOrderByAggregateInput";
export declare class SketchOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    download_link?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    project_id?: "asc" | "desc" | undefined;
    _count?: SketchCountOrderByAggregateInput | undefined;
    _max?: SketchMaxOrderByAggregateInput | undefined;
    _min?: SketchMinOrderByAggregateInput | undefined;
}
