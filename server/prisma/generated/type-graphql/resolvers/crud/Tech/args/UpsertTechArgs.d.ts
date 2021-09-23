import { TechCreateInput } from "../../../inputs/TechCreateInput";
import { TechUpdateInput } from "../../../inputs/TechUpdateInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";
export declare class UpsertTechArgs {
    where: TechWhereUniqueInput;
    create: TechCreateInput;
    update: TechUpdateInput;
}
