import { Answer } from "../models/Answer";
import { Project } from "../models/Project";
export declare class Question {
    id: string;
    question: string;
    answer?: Answer;
    answer_id: string;
    project?: Project;
    project_id: string;
}
