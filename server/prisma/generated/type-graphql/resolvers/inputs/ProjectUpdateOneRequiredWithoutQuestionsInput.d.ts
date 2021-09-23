import { ProjectCreateOrConnectWithoutQuestionsInput } from "../inputs/ProjectCreateOrConnectWithoutQuestionsInput";
import { ProjectCreateWithoutQuestionsInput } from "../inputs/ProjectCreateWithoutQuestionsInput";
import { ProjectUpdateWithoutQuestionsInput } from "../inputs/ProjectUpdateWithoutQuestionsInput";
import { ProjectUpsertWithoutQuestionsInput } from "../inputs/ProjectUpsertWithoutQuestionsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateOneRequiredWithoutQuestionsInput {
    create?: ProjectCreateWithoutQuestionsInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutQuestionsInput | undefined;
    upsert?: ProjectUpsertWithoutQuestionsInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
    update?: ProjectUpdateWithoutQuestionsInput | undefined;
}
