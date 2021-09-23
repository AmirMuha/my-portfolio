import { AdminCreateOrConnectWithoutAboutInput } from "../inputs/AdminCreateOrConnectWithoutAboutInput";
import { AdminCreateWithoutAboutInput } from "../inputs/AdminCreateWithoutAboutInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminCreateNestedOneWithoutAboutInput {
    create?: AdminCreateWithoutAboutInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutAboutInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
}
