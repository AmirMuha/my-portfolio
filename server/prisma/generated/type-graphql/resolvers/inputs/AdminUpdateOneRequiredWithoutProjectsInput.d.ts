import { AdminCreateOrConnectWithoutProjectsInput } from "../inputs/AdminCreateOrConnectWithoutProjectsInput";
import { AdminCreateWithoutProjectsInput } from "../inputs/AdminCreateWithoutProjectsInput";
import { AdminUpdateWithoutProjectsInput } from "../inputs/AdminUpdateWithoutProjectsInput";
import { AdminUpsertWithoutProjectsInput } from "../inputs/AdminUpsertWithoutProjectsInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminUpdateOneRequiredWithoutProjectsInput {
    create?: AdminCreateWithoutProjectsInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutProjectsInput | undefined;
    upsert?: AdminUpsertWithoutProjectsInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
    update?: AdminUpdateWithoutProjectsInput | undefined;
}
