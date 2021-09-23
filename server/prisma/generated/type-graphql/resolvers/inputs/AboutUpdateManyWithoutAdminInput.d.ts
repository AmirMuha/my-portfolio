import { AboutCreateManyAdminInputEnvelope } from "../inputs/AboutCreateManyAdminInputEnvelope";
import { AboutCreateOrConnectWithoutAdminInput } from "../inputs/AboutCreateOrConnectWithoutAdminInput";
import { AboutCreateWithoutAdminInput } from "../inputs/AboutCreateWithoutAdminInput";
import { AboutScalarWhereInput } from "../inputs/AboutScalarWhereInput";
import { AboutUpdateManyWithWhereWithoutAdminInput } from "../inputs/AboutUpdateManyWithWhereWithoutAdminInput";
import { AboutUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/AboutUpdateWithWhereUniqueWithoutAdminInput";
import { AboutUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/AboutUpsertWithWhereUniqueWithoutAdminInput";
import { AboutWhereUniqueInput } from "../inputs/AboutWhereUniqueInput";
export declare class AboutUpdateManyWithoutAdminInput {
    create?: AboutCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: AboutCreateOrConnectWithoutAdminInput[] | undefined;
    upsert?: AboutUpsertWithWhereUniqueWithoutAdminInput[] | undefined;
    createMany?: AboutCreateManyAdminInputEnvelope | undefined;
    connect?: AboutWhereUniqueInput[] | undefined;
    set?: AboutWhereUniqueInput[] | undefined;
    disconnect?: AboutWhereUniqueInput[] | undefined;
    delete?: AboutWhereUniqueInput[] | undefined;
    update?: AboutUpdateWithWhereUniqueWithoutAdminInput[] | undefined;
    updateMany?: AboutUpdateManyWithWhereWithoutAdminInput[] | undefined;
    deleteMany?: AboutScalarWhereInput[] | undefined;
}
