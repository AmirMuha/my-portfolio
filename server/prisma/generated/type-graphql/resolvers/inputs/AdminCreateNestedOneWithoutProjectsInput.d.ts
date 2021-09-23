import { AdminCreateOrConnectWithoutProjectsInput } from "../inputs/AdminCreateOrConnectWithoutProjectsInput";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminCreateNestedOneWithoutProjectsInput {
    create?: AdminCreateWithoutProjectsInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutProjectsInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
}
