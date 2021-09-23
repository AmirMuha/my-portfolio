import { SketchCreateManyProjectInputEnvelope } from "../inputs/SketchCreateManyProjectInputEnvelope";
import { SketchCreateOrConnectWithoutProjectInput } from "../inputs/SketchCreateOrConnectWithoutProjectInput";
import { SketchCreateWithoutProjectInput } from "../inputs/SketchCreateWithoutProjectInput";
import { SketchWhereUniqueInput } from "../inputs/SketchWhereUniqueInput";
export declare class SketchCreateNestedManyWithoutProjectInput {
    create?: SketchCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: SketchCreateOrConnectWithoutProjectInput[] | undefined;
    createMany?: SketchCreateManyProjectInputEnvelope | undefined;
    connect?: SketchWhereUniqueInput[] | undefined;
}
