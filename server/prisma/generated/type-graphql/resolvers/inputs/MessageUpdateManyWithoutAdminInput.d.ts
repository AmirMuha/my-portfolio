import { MessageCreateManyAdminInputEnvelope } from "../inputs/MessageCreateManyAdminInputEnvelope";
import { MessageCreateOrConnectWithoutAdminInput } from "../inputs/MessageCreateOrConnectWithoutAdminInput";
import { MessageCreateWithoutAdminInput } from "../inputs/MessageCreateWithoutAdminInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutAdminInput } from "../inputs/MessageUpdateManyWithWhereWithoutAdminInput";
import { MessageUpdateWithWhereUniqueWithoutAdminInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutAdminInput";
import { MessageUpsertWithWhereUniqueWithoutAdminInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutAdminInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageUpdateManyWithoutAdminInput {
    create?: MessageCreateWithoutAdminInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput[] | undefined;
    upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput[] | undefined;
    createMany?: MessageCreateManyAdminInputEnvelope | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
    set?: MessageWhereUniqueInput[] | undefined;
    disconnect?: MessageWhereUniqueInput[] | undefined;
    delete?: MessageWhereUniqueInput[] | undefined;
    update?: MessageUpdateWithWhereUniqueWithoutAdminInput[] | undefined;
    updateMany?: MessageUpdateManyWithWhereWithoutAdminInput[] | undefined;
    deleteMany?: MessageScalarWhereInput[] | undefined;
}
