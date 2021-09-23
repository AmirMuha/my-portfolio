import { ProjectCreateManyAdminInputEnvelope } from "../inputs/ProjectCreateManyAdminInputEnvelope";
import { ProjectCreateOrConnectWithoutAdminInput } from "../inputs/ProjectCreateOrConnectWithoutAdminInput";
import { ProjectCreateWithoutAdminInput } from "../inputs/ProjectCreateWithoutAdminInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedManyWithoutAdminInput {
    create?: ProjectCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput[] | undefined;
    createMany?: ProjectCreateManyAdminInputEnvelope | undefined;
    connect?: ProjectWhereUniqueInput[] | undefined;
}
