import { ProjectCreateOrConnectWithoutSketchesInput } from "../inputs/ProjectCreateOrConnectWithoutSketchesInput";
import { ProjectCreateWithoutSketchesInput } from "../inputs/ProjectCreateWithoutSketchesInput";
import { ProjectUpdateWithoutSketchesInput } from "../inputs/ProjectUpdateWithoutSketchesInput";
import { ProjectUpsertWithoutSketchesInput } from "../inputs/ProjectUpsertWithoutSketchesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateOneRequiredWithoutSketchesInput {
    create?: ProjectCreateWithoutSketchesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutSketchesInput | undefined;
    upsert?: ProjectUpsertWithoutSketchesInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
    update?: ProjectUpdateWithoutSketchesInput | undefined;
}
