import { AdminCreateNestedOneWithoutProjectsInput } from "../inputs/AdminCreateNestedOneWithoutProjectsInput";
import { SketchCreateNestedManyWithoutProjectInput } from "../inputs/SketchCreateNestedManyWithoutProjectInput";
import { TechCategoryCreateNestedManyWithoutProjectInput } from "../inputs/TechCategoryCreateNestedManyWithoutProjectInput";
export declare class ProjectCreateWithoutQuestionsInput {
    id?: string | undefined;
    name: string;
    image: string;
    github_url: string;
    app_url: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tech_categories?: TechCategoryCreateNestedManyWithoutProjectInput | undefined;
    sketches?: SketchCreateNestedManyWithoutProjectInput | undefined;
    admin: AdminCreateNestedOneWithoutProjectsInput;
}
