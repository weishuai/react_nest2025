import { SearchVo } from '../myutils/searchvo';
export declare class TaskVo {
    id: string;
    subject: string;
    dueDate: Date;
    collaborate1: string;
    collaborate2: string;
    relatedTo: string;
    priority: string;
    status: string;
    comments: string;
    relatedType: string;
    feedback: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TaskSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
