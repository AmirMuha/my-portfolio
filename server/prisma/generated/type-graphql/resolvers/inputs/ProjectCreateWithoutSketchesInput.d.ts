import { AdminCreateNestedOneWithoutProjectsInput } from "../inputs/AdminCreateNestedOneWithoutProjectsInput";
import { QuestionCreateNestedManyWithoutProjectInput } from "../inputs/QuestionCreateNestedManyWithoutProjectInput";
import { TechCategoryCreateNestedManyWithoutProjectInput } from "../inputs/TechCategoryCreateNestedManyWithoutProjectInput";
export declare class ProjectCreateWithoutSketchesInput {
    id?: string | undefined;
    name: string;
    image: string;
    github_url: string;
    app_url: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tech_categories?: TechCategoryCreateNestedManyWithoutProjectInput | undefined;
    questions?: QuestionCreateNestedManyWithoutProjectInput | undefined;
    admin: AdminCreateNestedOneWithoutProjectsInput;
}
