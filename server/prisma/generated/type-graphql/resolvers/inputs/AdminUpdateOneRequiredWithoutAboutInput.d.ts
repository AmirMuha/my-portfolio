import { AdminCreateOrConnectWithoutAboutInput } from "../inputs/AdminCreateOrConnectWithoutAboutInput";
import { AdminCreateWithoutAboutInput } from "../inputs/AdminCreateWithoutAboutInput";
import { AdminUpdateWithoutAboutInput } from "../inputs/AdminUpdateWithoutAboutInput";
import { AdminUpsertWithoutAboutInput } from "../inputs/AdminUpsertWithoutAboutInput";
import { AdminWhereUniqueInput } from "../inputs/AdminWhereUniqueInput";
export declare class AdminUpdateOneRequiredWithoutAboutInput {
    create?: AdminCreateWithoutAboutInput | undefined;
    connectOrCreate?: AdminCreateOrConnectWithoutAboutInput | undefined;
    upsert?: AdminUpsertWithoutAboutInput | undefined;
    connect?: AdminWhereUniqueInput | undefined;
    update?: AdminUpdateWithoutAboutInput | undefined;
}
