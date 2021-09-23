import { QuestionCreateManyProjectInputEnvelope } from "../inputs/QuestionCreateManyProjectInputEnvelope";
import { QuestionCreateOrConnectWithoutProjectInput } from "../inputs/QuestionCreateOrConnectWithoutProjectInput";
import { QuestionCreateWithoutProjectInput } from "../inputs/QuestionCreateWithoutProjectInput";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyWithWhereWithoutProjectInput } from "../inputs/QuestionUpdateManyWithWhereWithoutProjectInput";
import { QuestionUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/QuestionUpdateWithWhereUniqueWithoutProjectInput";
import { QuestionUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/QuestionUpsertWithWhereUniqueWithoutProjectInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionUpdateManyWithoutProjectInput {
    create?: QuestionCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: QuestionUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    createMany?: QuestionCreateManyProjectInputEnvelope | undefined;
    connect?: QuestionWhereUniqueInput[] | undefined;
    set?: QuestionWhereUniqueInput[] | undefined;
    disconnect?: QuestionWhereUniqueInput[] | undefined;
    delete?: QuestionWhereUniqueInput[] | undefined;
    update?: QuestionUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: QuestionUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: QuestionScalarWhereInput[] | undefined;
}
