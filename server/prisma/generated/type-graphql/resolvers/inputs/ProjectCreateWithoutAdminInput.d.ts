import { QuestionCreateNestedManyWithoutProjectInput } from "../inputs/QuestionCreateNestedManyWithoutProjectInput";
import { SketchCreateNestedManyWithoutProjectInput } from "../inputs/SketchCreateNestedManyWithoutProjectInput";
import { TechCategoryCreateNestedManyWithoutProjectInput } from "../inputs/TechCategoryCreateNestedManyWithoutProjectInput";
export declare class ProjectCreateWithoutAdminInput {
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
    sketches?: SketchCreateNestedManyWithoutProjectInput | undefined;
}
