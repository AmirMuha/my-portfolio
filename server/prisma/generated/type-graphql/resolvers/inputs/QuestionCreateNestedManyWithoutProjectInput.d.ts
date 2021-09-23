import { QuestionCreateManyProjectInputEnvelope } from "../inputs/QuestionCreateManyProjectInputEnvelope";
import { QuestionCreateOrConnectWithoutProjectInput } from "../inputs/QuestionCreateOrConnectWithoutProjectInput";
import { QuestionCreateWithoutProjectInput } from "../inputs/QuestionCreateWithoutProjectInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionCreateNestedManyWithoutProjectInput {
    create?: QuestionCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput[] | undefined;
    createMany?: QuestionCreateManyProjectInputEnvelope | undefined;
    connect?: QuestionWhereUniqueInput[] | undefined;
}
