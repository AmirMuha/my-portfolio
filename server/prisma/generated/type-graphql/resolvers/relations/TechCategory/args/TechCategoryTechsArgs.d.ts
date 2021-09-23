import { TechOrderByWithRelationInput } from "../../../inputs/TechOrderByWithRelationInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";
export declare class TechCategoryTechsArgs {
    where?: TechWhereInput | undefined;
    orderBy?: TechOrderByWithRelationInput[] | undefined;
    cursor?: TechWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "tech_category_id"> | undefined;
}
