import { ProjectCreateOrConnectWithoutQuestionsInput } from "../inputs/ProjectCreateOrConnectWithoutQuestionsInput";
import { ProjectCreateWithoutQuestionsInput } from "../inputs/ProjectCreateWithoutQuestionsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedOneWithoutQuestionsInput {
    create?: ProjectCreateWithoutQuestionsInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutQuestionsInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
}
