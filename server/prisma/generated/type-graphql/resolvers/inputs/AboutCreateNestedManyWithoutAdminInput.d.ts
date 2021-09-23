import { AboutCreateManyAdminInputEnvelope } from "../inputs/AboutCreateManyAdminInputEnvelope";
import { AboutCreateOrConnectWithoutAdminInput } from "../inputs/AboutCreateOrConnectWithoutAdminInput";
import { AboutCreateWithoutAdminInput } from "../inputs/AboutCreateWithoutAdminInput";
import { AboutWhereUniqueInput } from "../inputs/AboutWhereUniqueInput";
export declare class AboutCreateNestedManyWithoutAdminInput {
    create?: AboutCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: AboutCreateOrConnectWithoutAdminInput[] | undefined;
    createMany?: AboutCreateManyAdminInputEnvelope | undefined;
    connect?: AboutWhereUniqueInput[] | undefined;
}
