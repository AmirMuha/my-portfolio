import { ProjectCreateNestedOneWithoutSketchesInput } from "../inputs/ProjectCreateNestedOneWithoutSketchesInput";
export declare class SketchCreateInput {
    id?: string | undefined;
    title: string;
    body: string;
    download_link: string;
    image: string;
    project: ProjectCreateNestedOneWithoutSketchesInput;
}
