import { TechCategoryOrderByWithRelationInput } from "../../../inputs/TechCategoryOrderByWithRelationInput";
import { TechCategoryWhereInput } from "../../../inputs/TechCategoryWhereInput";
import { TechCategoryWhereUniqueInput } from "../../../inputs/TechCategoryWhereUniqueInput";
export declare class ProjectTech_categoriesArgs {
    where?: TechCategoryWhereInput | undefined;
    orderBy?: TechCategoryOrderByWithRelationInput[] | undefined;
    cursor?: TechCategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "project_id"> | undefined;
}
