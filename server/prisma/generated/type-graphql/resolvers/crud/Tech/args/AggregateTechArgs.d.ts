import { TechOrderByWithRelationInput } from "../../../inputs/TechOrderByWithRelationInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";
export declare class AggregateTechArgs {
    where?: TechWhereInput | undefined;
    orderBy?: TechOrderByWithRelationInput[] | undefined;
    cursor?: TechWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
