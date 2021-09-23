import { AdminCreateOrConnectWithoutMessagesInput } from "../inputs/AdminCreateOrConnectWithoutMessagesInput";
import { AdminCreateWithoutMessagesInput } from "../inputs/AdminCreateWithoutMessagesInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminCreateNestedOneWithoutMessagesInput {
    create?: AdminCreateWithoutMessagesInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutMessagesInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
}
