import { AdminCreateOrConnectWithoutMessagesInput } from "../inputs/AdminCreateOrConnectWithoutMessagesInput";
import { AdminCreateWithoutMessagesInput } from "../inputs/AdminCreateWithoutMessagesInput";
import { AdminUpdateWithoutMessagesInput } from "../inputs/AdminUpdateWithoutMessagesInput";
import { AdminUpsertWithoutMessagesInput } from "../inputs/AdminUpsertWithoutMessagesInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminUpdateOneRequiredWithoutMessagesInput {
    create?: AdminCreateWithoutMessagesInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutMessagesInput | undefined;
    upsert?: AdminUpsertWithoutMessagesInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
    update?: AdminUpdateWithoutMessagesInput | undefined;
}
