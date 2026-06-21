import { IComment } from "./comments.interface";
import { TaskStatus } from "../types/task-status.type";

export interface ITask {
    id: string;
    name: string;
    description: string;
    comments: IComment[];
    status: TaskStatus
}