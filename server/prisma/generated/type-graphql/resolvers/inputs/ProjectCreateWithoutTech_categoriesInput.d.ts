import { AdminCreateNestedOneWithoutProjectsInput } from "../inputs/AdminCreateNestedOneWithoutProjectsInput";
import { QuestionCreateNestedManyWithoutProjectInput } from "../inputs/QuestionCreateNestedManyWithoutProjectInput";
import { SketchCreateNestedManyWithoutProjectInput } from "../inputs/SketchCreateNestedManyWithoutProjectInput";
export declare class ProjectCreateWithoutTech_categoriesInput {
    id?: string | undefined;
    name: string;
    image: string;
    github_url: string;
    app_url: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    questions?: QuestionCreateNestedManyWithoutProjectInput | undefined;
    sketches?: SketchCreateNestedManyWithoutProjectInput | undefined;
    admin: AdminCreateNestedOneWithoutProjectsInput;
}
