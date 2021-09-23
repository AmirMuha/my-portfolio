import { ProjectCreateOrConnectWithoutSketchesInput } from "../inputs/ProjectCreateOrConnectWithoutSketchesInput";
import { ProjectCreateWithoutSketchesInput } from "../inputs/ProjectCreateWithoutSketchesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedOneWithoutSketchesInput {
    create?: ProjectCreateWithoutSketchesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutSketchesInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
}
