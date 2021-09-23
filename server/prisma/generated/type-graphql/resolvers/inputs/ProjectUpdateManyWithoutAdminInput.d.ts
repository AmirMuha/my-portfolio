import { ProjectCreateManyAdminInputEnvelope } from "../inputs/ProjectCreateManyAdminInputEnvelope";
import { ProjectCreateOrConnectWithoutAdminInput } from "../inputs/ProjectCreateOrConnectWithoutAdminInput";
import { ProjectCreateWithoutAdminInput } from "../inputs/ProjectCreateWithoutAdminInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutAdminInput } from "../inputs/ProjectUpdateManyWithWhereWithoutAdminInput";
import { ProjectUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutAdminInput";
import { ProjectUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutAdminInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateManyWithoutAdminInput {
    create?: ProjectCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput[] | undefined;
    upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput[] | undefined;
    createMany?: ProjectCreateManyAdminInputEnvelope | undefined;
    connect?: ProjectWhereUniqueInput[] | undefined;
    set?: ProjectWhereUniqueInput[] | undefined;
    disconnect?: ProjectWhereUniqueInput[] | undefined;
    delete?: ProjectWhereUniqueInput[] | undefined;
    update?: ProjectUpdateWithWhereUniqueWithoutAdminInput[] | undefined;
    updateMany?: ProjectUpdateManyWithWhereWithoutAdminInput[] | undefined;
    deleteMany?: ProjectScalarWhereInput[] | undefined;
}
