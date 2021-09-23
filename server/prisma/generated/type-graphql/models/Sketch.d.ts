import { Project } from "../models/Project";
export declare class Sketch {
    id: string;
    title: string;
    body: string;
    download_link: string;
    image: string;
    project?: Project;
    project_id: string;
}
