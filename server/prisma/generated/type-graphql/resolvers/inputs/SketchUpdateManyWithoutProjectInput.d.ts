import { SketchCreateManyProjectInputEnvelope } from "../inputs/SketchCreateManyProjectInputEnvelope";
import { SketchCreateOrConnectWithoutProjectInput } from "../inputs/SketchCreateOrConnectWithoutProjectInput";
import { SketchCreateWithoutProjectInput } from "../inputs/SketchCreateWithoutProjectInput";
import { SketchScalarWhereInput } from "../inputs/SketchScalarWhereInput";
import { SketchUpdateManyWithWhereWithoutProjectInput } from "../inputs/SketchUpdateManyWithWhereWithoutProjectInput";
import { SketchUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/SketchUpdateWithWhereUniqueWithoutProjectInput";
import { SketchUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/SketchUpsertWithWhereUniqueWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";
export declare class SketchUpdateManyWithoutProjectInput {
    create?: SketchCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: SketchCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: SketchUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    createMany?: SketchCreateManyProjectInputEnvelope | undefined;
    connect?: SketchWhereUniqueInput[] | undefined;
    set?: SketchWhereUniqueInput[] | undefined;
    disconnect?: SketchWhereUniqueInput[] | undefined;
    delete?: SketchWhereUniqueInput[] | undefined;
    update?: SketchUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: SketchUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: SketchScalarWhereInput[] | undefined;
}
