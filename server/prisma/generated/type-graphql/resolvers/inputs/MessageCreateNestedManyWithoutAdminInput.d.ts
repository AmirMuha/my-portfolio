import { MessageCreateManyAdminInputEnvelope } from "../inputs/MessageCreateManyAdminInputEnvelope";
import { MessageCreateOrConnectWithoutAdminInput } from "../inputs/MessageCreateOrConnectWithoutAdminInput";
import { MessageCreateWithoutAdminInput } from "../inputs/MessageCreateWithoutAdminInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageCreateNestedManyWithoutAdminInput {
    create?: MessageCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput[] | undefined;
    createMany?: MessageCreateManyAdminInputEnvelope | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
}
