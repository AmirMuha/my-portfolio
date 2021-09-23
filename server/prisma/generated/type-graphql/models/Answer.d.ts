import { Question } from "../models/Question";
export declare class Answer {
    id: string;
    answer: string;
    question?: Question | null;
}
