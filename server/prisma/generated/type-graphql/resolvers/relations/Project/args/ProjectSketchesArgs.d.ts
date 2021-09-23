import { SketchOrderByWithRelationInput } from "../../../inputs/SketchOrderByWithRelationInput";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";
import { SketchWhereUniqueInput } from "../../../inputs/SketchWhereUniqueInput";
export declare class ProjectSketchesArgs {
    where?: SketchWhereInput | undefined;
    orderBy?: SketchOrderByWithRelationInput[] | undefined;
    cursor?: SketchWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "body" | "download_link" | "image" | "project_id"> | undefined;
}
