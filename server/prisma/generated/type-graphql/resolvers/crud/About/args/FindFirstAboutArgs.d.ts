import { AboutOrderByWithRelationInput } from "../../../inputs/AboutOrderByWithRelationInput";
import { AboutWhereInput } from "../../../inputs/AboutWhereInput";
import { AboutWhereUniqueInput } from "../../../inputs/AboutWhereUniqueInput";
export declare class FindFirstAboutArgs {
    where?: AboutWhereInput | undefined;
    orderBy?: AboutOrderByWithRelationInput[] | undefined;
    cursor?: AboutWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "body" | "admin_id" | "updatedAt"> | undefined;
}
