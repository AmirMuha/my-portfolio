import { ProjectCreateInput } from "../../../inputs/ProjectCreateInput";
import { ProjectUpdateInput } from "../../../inputs/ProjectUpdateInput";
import { ProjectWhereUniqueInput } from "../../../inputs/ProjectWhereUniqueInput";
export declare class UpsertProjectArgs {
    where: ProjectWhereUniqueInput;
    create: ProjectCreateInput;
    update: ProjectUpdateInput;
}
